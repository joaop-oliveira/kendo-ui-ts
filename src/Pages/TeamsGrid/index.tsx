import * as React from "react";
import axios, { AxiosResponse } from "axios";
import { Tooltip } from "@progress/kendo-react-tooltip";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { TeamsGridProps, TeamsGridState } from "./typedef";
import data from "../../data.json";

class TeamsGrid extends React.Component<TeamsGridProps, TeamsGridState> {
  state = {
    data: [{}]
  };
  componentDidMount(): void {
    this.setState(
      (state: TeamsGridState): TeamsGridState => ({
        ...state,
        data
      })
    );
  }
  render(): React.ReactNode {
    return (
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <Tooltip openDelay={100} position="right" anchorElement="element">
            <Grid data={this.state.data} style={{ height: "400px" }}>
              <Column field="name" title="Nome do Time" />
              <Column field="current_videogame.name" title="Nome do Jogo" />
              <Column field="players.length" title="Jogadores" />
            </Grid>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default TeamsGrid;
