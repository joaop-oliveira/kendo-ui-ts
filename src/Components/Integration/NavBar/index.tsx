import * as React from 'react';
import { Menu, MenuItem } from '@progress/kendo-react-layout';
import { Button } from '@progre'


type NavBarProps = {

}

class NavBar extends React.Component<NavBarProps, object>{
    render(): React.ReactNode {
        return (
            <Menu style={{ display: 'inline-block' }}>
                <MenuItem text="Components">
                    <MenuItem text="Buttons" />
                    <MenuItem text="Fields"/>
                </MenuItem>
            </Menu>
        );
    }
}

export default NavBar;
