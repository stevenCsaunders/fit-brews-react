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
		const RenderCarousel = ({ drinks }) => {
			// const checkFeatured = (drink) => drink.featured === true
			const slides = [
				{
					src: drinks[0].image,
					altText: drinks[0].name,
					caption: drinks[0].description,
					header: drinks[0].name,
					key: '1',
				},
				{
					src: drinks[1].image,
					altText: drinks[1].name,
					caption: drinks[1].description,
					header: drinks[1].name,
					key: '2',
				},
				{
					src: drinks[2].image,
					altText: drinks[2].name,
					caption: drinks[2].description,
					header: drinks[2].name,
					key: '3',
				},
			]

			console.log(slides)

			return (
				<div className="carouselImage">
					<UncontrolledCarousel items={slides} />
				</div>
			)
		}

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
					<RenderCarousel drinks={this.props.drinks} />
			</React.Fragment>
		)
	}
}

export default TopNav
