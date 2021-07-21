import { Menu } from "antd";
import BaseElement from '../BaseElement';
import React from "react";
import { NavigationItem, NavigationProps } from ".";


const { Item: MenuItem } = Menu

class Navigation extends BaseElement<NavigationProps, any> {

  buildMenuItem(items: NavigationItem[] = []) {
    return items.map(menuItem => (
      <MenuItem key={menuItem.key}>
        {menuItem.title}
      </MenuItem>
    ))
  }

  render() {
    const { items } = this.props.data;
    return (
      <Menu>
        {this.buildMenuItem(items)}
      </Menu>
    );
  }
}

export default Navigation;