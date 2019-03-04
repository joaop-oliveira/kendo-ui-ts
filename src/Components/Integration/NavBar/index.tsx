import * as React from "react";
import axios from 'axios';
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import AtivarEmpresaGrid from '../Grid/index';
import { Dialog, DialogActionsBar, Window } from '@progress/kendo-react-dialogs';

export interface NavBarProps {

};

export interface EmpresaAtiva {
    label: string,
    value: number
}

export interface NavBarState {
    open: boolean,
    data: Array<EmpresaAtiva>,
    gridOpen: boolean
}

class NavBar extends React.Component<NavBarProps, NavBarState> {
    state = {
        open: false,
        data: [],
        gridOpen: false
    };

    async componentDidMount() {
        axios.get(`http://10.7.28.24/webvelit/api/cheque/get_cheque_cheques`,{headers: {
                token:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiQU5EUkUiLCJub21lIjoiS0lNIEFORFJFIEZVUkVWSUtTVFJBTkQiLCJlbXByZXNhIjp7ImVtcF9jb2RnIjoxMDEsImVtcF9mYW50YXNpYSI6IlZFTElUIC0gMSJ9LCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTUxNTIxMjg1LCJleHAiOjE1NTE1NjQ0ODV9.j0cRAm_GMhLSTDJxnn3z6hZsN-KjDFI6MShKyFhlSPY`
            }})
            .then(this.handleDataIncoming)
            .catch(err => console.error(err));
    }

    handleDataIncoming = ({ data }:any): void => {
        this.setState((state: NavBarState):NavBarState => ({
            ...state,
            data,
        }));
    }

    handleSelect = (event: any):void  => {
        console.log(event.target.props.title);
    };

    handleClickWindow = (): void  => {
        this.setState((state: NavBarState): NavBarState => ({
            ...state,
            open: !state.open
        }));
    };

    handleClickGrid = (): void  => {
        this.setState((state: NavBarState): NavBarState => ({
            ...state,
            gridOpen: !state.gridOpen
        }));
    };

  render(): React.ReactNode {
      const { data } = this.state;
    return (
        <React.Fragment>
          <PanelBar onSelect={this.handleSelect}>
            <PanelBarItem title="Components">
              <PanelBarItem title="Buttons"  />
              <PanelBarItem title="Submenu" >
                  <Button onClick={this.handleClickWindow}>Click Me</Button>
                  <Button onClick={this.handleClickGrid}>Grid</Button>
              </PanelBarItem>
                <PanelBarItem title="hello"/>
            </PanelBarItem>
          </PanelBar>
            {this.state.open && <Window title={"Please confirm"} onClose={this.handleClickWindow}>
                <DialogActionsBar>
                    <button className="k-button" onClick={this.handleClickWindow}>No</button>
                    <button className="k-button" onClick={this.handleClickWindow}>Yes</button>
                </DialogActionsBar>
            </Window>}
            {this.state.gridOpen && (
                <AtivarEmpresaGrid data={{ data, total: data.length }}/>
            )}
        </React.Fragment>
    );
  }
}

export default NavBar;
