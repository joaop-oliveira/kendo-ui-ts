import * as React from "react";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";

type NavBarProps = {};

class NavBar extends React.Component<NavBarProps, object> {
  render(): React.ReactNode {
    return (
      <PanelBar>
        <PanelBarItem title="Components">
          <PanelBarItem title="Buttons" />
          <PanelBarItem title="Fields" />
        </PanelBarItem>
      </PanelBar>
    );
  }
}

export default NavBar;
