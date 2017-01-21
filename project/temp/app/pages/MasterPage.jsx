import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand, Navbar, Nav, NavItem, MenuItem, NavDropdown, Button } from 'react-bootstrap'


export default class MasterPage extends React.Component {

    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <Navbar fixedTop inverse collapseOnSelect>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">RENS Stack Cli</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1}><Link className="topNavLink" to="/">Link</Link></NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {this.props.children}
            </div>
            )
        }
}