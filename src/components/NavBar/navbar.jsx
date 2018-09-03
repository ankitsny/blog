import React, { Component } from 'react';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import { BrandName } from '../../constants/constants';


class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
    };
  }


  toggle() {
    this.setState((prevState) => {
      const state1 = { ...prevState };
      state1.isOpen = !state1.isOpen;
      return state1;
    });
  }


  render() {
    const { isOpen } = this.state;
    return (
      <Navbar color="light" expand="md">
        <NavbarBrand href="#" className=" brand-color">{BrandName}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#"><i className="fa fa-search" /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><i className="fa fa-bell" /></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <i className="fa fa-user" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    Option 1
                </DropdownItem>
                <DropdownItem>
                    Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

        </Collapse>
      </Navbar>
    );
  }
}


export default NavBar;
