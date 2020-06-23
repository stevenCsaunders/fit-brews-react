import React, { Component } from 'react'
import {
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	NavLink,
	Collapse,
	NavItem,
	Jumbotron,
	UncontrolledCarousel,
} from 'reactstrap'
import SearchModal from './SearchModalComponent'
import LoginModal from './LoginModal'

class TopNav extends Component {
	constructor(props) {
		super(props)

		this.toggleNav = this.toggleNav.bind(this)
		this.state = {
			isNavOpen: false,
			activeIndex: 0,
			animating: false,
		}
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		})
	}

	render() {

		return (
			<React.Fragment>
				<Navbar light sticky="top" expand="md">
					<div className="container">
						<NavbarBrand className="mr-auto" href="/home">
							<img
								src="https://i.gyazo.com/35e5d83ca78e7983c945e7ef6db7808d.png"
								alt="fit brews logo"
								className="mr-5"
							/>
						</NavbarBrand>
						<NavbarToggler onClick={this.toggleNav} />
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" href="/">
										Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className="nav-link"
										href="/categories"
									>
										Categories
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" href="/drink">
										Drink Test
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
					<LoginModal />
					<SearchModal />
				</Navbar>
			</React.Fragment>
		)
	}
}

export default TopNav
