import React from 'react'
import { Button, Label, Col, Row, Container } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form'

const validEmail = (val) =>
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		val
	)
const handleSubmit = (value) => {
	alert(`${JSON.stringify(value)} is a valid address`)
}

const Footer = () => {
	return (
		<footer className="footer py-5">
			<div className="container">
				<Row xs="1" sm="2" className="">
					<Col className="px-5">
						<FooterContact />
					</Col>
					<Col>
						<FooterSocial />
					</Col>
				</Row>
			</div>
		</footer>
	)
}

const FooterContact = () => {
	return (
		<Container className="footer-contact text-center text-sm-left pb-4 pb-md-0">
			<Row className="pb-3">
				<Col>
					<h5>Contact Us</h5>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>
						Want to have all the latest and greatest recipes sent
						directly to your inbox?
					</p>
				</Col>
			</Row>
			<LocalForm
				className="footer-email-form pb-3"
				onSubmit={(value) => handleSubmit(value)}
			>
				<Row xs="1" md="2">
					<Col xs="12" md="8" className="pr-md-1 pb-2">
						<Label htmlFor="email" className="sr-only">
							Your Email
						</Label>
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

					<Col xs="12" md="4" className="pl-md-1">
						<Button
							type="submit"
							outline
							color="light"
							className="email-submit-button btn-block px-2"
						>
							<i className="fa fa-paper-plane"></i>
						</Button>
					</Col>
				</Row>
			</LocalForm>
			<Row>
				<Col>
					<p>98 Adams St. | Kalispell | MT 59901</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>(555) 555-5555</p>
				</Col>
			</Row>
		</Container>
	)
}

const FooterSocial = () => {
	return (
		<Container className="footer-social text-center text-sm-left">
			<Row className="pb-3">
				<Col>
					<h5>Connect With Us</h5>
				</Col>
			</Row>
			<Row>
				<Col className="pb-3 d-none d-md-block">
					<a className="footer-logo " href="/">
						<img
							src={require('../shared/images/logo.svg')}
							className="w-50"
							alt="Fit Brews"
							
						/>
					</a>
				</Col>
			</Row>
			<Row>
				<Col>
					<p className="d-none d-sm-inline-block">
						Share your favorite drink recipes!
					</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<ul className="social-icons d-flex justify-content-center justify-content-sm-start pl-sm-0">
						<li className="social-icon">
							<a
								href="https://twitter.com"
							>
								<span className="fa fa-twitter"></span>
							</a>
						</li>
						<li className="social-icon">
							<a
								href="https://facebook.com"
							>
								<i className="fa fa-facebook"></i>
							</a>
						</li>
						<li className="social-icon">
							<a
								href="https://facebook.com"
							>
								<span className="fa fa-instagram"></span>
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	)
}

export default Footer
