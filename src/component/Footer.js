import React from 'react';
import {
    Button,
    Label,
    Col,
    Row,
} from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from "react-router-dom";

const validEmail = (val) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
const handleSubmit = (value) => {
alert(`${JSON.stringify(value)} is a valid address`);
}

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <FooterContact />
                    <FooterSocial />
                    <FooterNav />
                </div>
            </div>
        </footer>
    );
}

const FooterContact = () => {

    return (
        <div className='col-sm-4'>
            <h5>Contact Us</h5>
            <p>Want to have all the latest and greatest recipes sent directyl to your inbox?</p>
            <LocalForm class="footer-email-form" onSubmit={(value) => handleSubmit(value)}>
                <Row className="form-group">
                    <Label htmlFor="email">
                        Email
                </Label>
                    <Col>
                        <Label htmlFor='email'>
                            Your Email Address
                                    </Label>
                        <Control.text model='.email' name='email' id='email' className='form-control' placeholder='Email Address'
                            validators={{
                                validEmail,
                            }}
                        />
                        <Errors className='text-danger'
                            model='.email'
                            show='touched'
                            components='div'
                            messages={{
                                required: 'Required',
                                validEmail: "You have entered an invalid email. Please try again"
                            }} />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col>
                        <Button type="submit" color="primary">
                            Sign Up
                        </Button>
                    </Col>
                </Row>
            </LocalForm>
            <p>98 Adams St. | Kalispell | MT 59901</p>
            <p>(555) 555-5555</p>
        </div>
    );
}

const FooterSocial = () => {
    return (
        <div className='col-sm-4'>
            <h5>Connect With Us</h5>
            <a class="footer-logo mb-3" href="#">
                <img src="images/logo.png" class="logo" alt="Fit Brews" width="100" />
            </a>
            <p class="d-none d-sm-inline-block">
                Share your favorite drink recipes! </p>
            <ul class="social-icons p-0">
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
    );
}

const FooterNav = () => {
    return (
        <div className='col-sm-4'>
            <h5>Support</h5>
            <ul class="navbar-nav support">
                <li class="support-item">
                    <Link to='/tags'>About</Link>
                </li>
                <li class="support-item">
                    <Link to='/home'>Contact</Link>
                </li>
                <li class="support-item">
                    <Link to='/tags'>FAQ</Link>
                </li>
            </ul>
        </div>
    );
}

export default Footer;