import React from 'react'
import { Button, Label, Col, Row } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form'
import { Link } from 'react-router-dom'

const validEmail = (val) =>
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		val
	)
const handleSubmit = (value) => {
	alert(`${JSON.stringify(value)} is a valid address`)
}

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row d-felx flex-column flex-md-row flex-nowrap">
					<FooterContact />
					<FooterSocial />
					<FooterNav />
				</div>
			</div>
		</footer>
	)
}

const FooterContact = () => {
	return (
		<div className="footer-contact d-flex flex-column align-items-center align-items-md-start px-5 px-md-4">
			<h5>Contact Us</h5>
			<p>
				Want to have all the latest and greatest recipes sent directly
				to your inbox?
			</p>
			<LocalForm
				class="footer-email-form"
				onSubmit={(value) => handleSubmit(value)}
			>
				<Row className="form-group d-felx flex-column flex-md-row mt-md-2">
					<Col className="pr-md-1">
						<Label htmlFor="email" className="sr-only">Your Email</Label>
						<Control.text
							model=".email"
							name="email"
							id="email"
							className="form-control email-input"
							placeholder="Email Address"
							validators={{
								validEmail,
							}}
						/>
						<Errors
							className="text-danger"
							model=".email"
							show="touched"
							components="div"
							messages={{
								required: 'Required',
								validEmail:
									'You have entered an invalid email. Please try again',
							}}
						/>
					</Col>

					<Col className="px-md-0 py-2 py-md-0 col-md-2">
						<Button type="submit" outline color="light" className="email-submit-button" >
							<i className="fa fa-paper-plane"></i>
						</Button>
					</Col>
				</Row>
			</LocalForm>
			<p>98 Adams St. | Kalispell | MT 59901</p>
			<p>(555) 555-5555</p>
		</div>
	)
}

const FooterSocial = () => {
	return (
		<div className="footer-social align-items-center align-items-md-start mx-md-4 my-md-0 my-4 px-0 px-md-4">
			<h5>Connect With Us</h5>
			<a class="footer-logo mb-3" href="#">
				<img
					src={require("../shared/images/logo.png")}
					class="logo"
					alt="Fit Brews"
				/>
			</a>
			<p class="d-none d-sm-inline-block">Share your favorite drink recipes!</p>
			<ul class="social-icons d-flex align-items-start">
				<li class="social-icon">
					<a className="btn btn-social-icon">
						<span class="fa fa-twitter"></span>
					</a>
				</li>
				<li class="social-icon">
					<a class="btn btn-social-icon">
						<i class="fa fa-facebook"></i>
					</a>
				</li>
				<li class="social-icon">
					<a class="btn btn-social-icon">
						<span class="fa fa-instagram"></span>
					</a>
				</li>
			</ul>
		</div>
	)
}

const FooterNav = () => {
	return (
		<div className="footer-support px-0 px-md-4">
			<h5>Support</h5>
			<ul class="navbar-nav footer-nav">
				<li class="support-item">
					<Link to="/tags">About</Link>
				</li>
				<li class="support-item">
					<Link to="/home">Contact</Link>
				</li>
				<li class="support-item">
					<Link to="/tags">FAQ</Link>
				</li>
			</ul>
		</div>
	)
}

export default Footer
