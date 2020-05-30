import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavLink, Collapse, NavItem, Jumbotron } from 'reactstrap';
import SearchModal from './SearchModalComponent';
import LoginModal from './LoginModal';

class TopNav extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }

    render() {
        return (
            <React.Fragment>
            <Navbar light sticky='top' expand='md'>
                    <div className='container'>
                        <NavbarBrand className='mr-auto' href='/home'>
                            <img src="https://i.gyazo.com/35e5d83ca78e7983c945e7ef6db7808d.png" alt="fit brews logo" className="mr-5"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' href='/home'>
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' href='/categories'>
                                        Categories
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' href='/saved'>
                                        Saved
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                    <LoginModal />
                    <SearchModal />
                </Navbar>
                <Jumbotron fluid>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <h1>Fit Brews</h1>
                                <h2>Drink to your health</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default TopNav;
