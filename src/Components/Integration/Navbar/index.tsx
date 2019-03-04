import * as React from "react";
import _ from "lodash";
import { withRouter } from "react-router-dom";
import { Menu, MenuItem } from "@progress/kendo-react-layout";
import { NavbarProps } from "./typedef";

class Navbar extends React.Component<NavbarProps, object> {
  onRoute = (event: any): void => {
    console.log("fired");
    this.props.history.push(event.item.data.route);
  };

  render(): React.ReactNode {
    return (
      <Menu onSelect={this.onRoute}>
        <MenuItem text="Cadastro" data={{ route: "/webvelit/form" }} />
        <MenuItem text="Consulta" data={{ route: "/webvelit/grid" }} />
      </Menu>
    );
  }
}

export default withRouter(Navbar);
