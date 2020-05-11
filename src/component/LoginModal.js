import React, { Component } from "react";
import {Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Label, Input } from "reactstrap";



class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
    }

    render () {
        const toggleModal = () => {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            })
        };

        return (
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                    Login
                </ModalHeader>
                <ModalBody>
                    
                </ModalBody>
            </Modal>
        );
    }
}