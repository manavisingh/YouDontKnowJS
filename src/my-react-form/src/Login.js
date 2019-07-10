import React, { Component } from 'react';
import ModalSignIn from './ModalSignIn';
import EmailSent from './EmailSent';
import PropTypes from 'prop-types';
import ForgotPassword from './ForgotPassword';
import {Link} from "react-router-dom";

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'personal',
            forgotPass: false,
            signupDone: false,
            isLoading: false
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.buttonClicked = "";
        this.isSubmitted = false;
        this.showForm = true;
        this.forgotPwd = false;
    }

    getSubmitBtnSignUp() {
        this.buttonClicked = "signup"
    }

    getSubmitBtnSignIn() {
        this.buttonClicked = "signin"
    }

    showForgotPassPage(event) {
        this.setState({
            forgotPass: true
        });
    }

    toggleLoaderImg(state){
        document.getElementsByClassName('preloader')[0].style.display = state;
    }

    handleFormSubmit(event) {
        event.preventDefault();
        var data = new FormData(event.target);
        var dataJson = JSON.parse(stringifyFormData(data));
        this.state.isLoading = true;
        if (this.buttonClicked === "signup") {
            console.log(this.buttonClicked);
            var urlsignup = 'http://13.235.126.110:3000/register';
            var dataToSendSignUp = {
                "name": dataJson.name,
                "email": dataJson.email,
                "mobileNumber": dataJson.phone,
                "password": dataJson.password
            }
            fetch(urlsignup, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                mode: "cors",
                body: JSON.stringify(dataToSendSignUp)
            }).then(response => {
                this.state.isLoading = false;
                if (response.ok) {
                    this.setState({
                        isLoading: false,
                        signupDone: true,
                        modalSignIn: false,
                        modalSignUp: false
                    })
                }
            })
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    modalOpen(event) {
        var modalClickedClass = event.target.className;
        console.log(modalClickedClass);
        this.setState({
            modalSignIn: true,
            modalSignUp: false
        });
    }

    sendData(url, data, e, signtype) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            mode: "cors",
            body: data
        }).then(function (response) {
            console.log(response)
        });
    }

    modalClose(event) {
        this.setState({
            modalInputName: "",
            modalSignUp: false,
            modalSignIn: false,
            forgotPass: false
        });
        this.isSubmitted = false;
    }

    render() {
        const { fireRedirect } = this.state
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="container login100-form" id="loginForm" noValidate onSubmit={e => this.handleFormSubmit(e)}>
                            <div style={{ display: (this.showForm ? 'block' : 'none') }} className="row d-flex flex-column align-items-center justify-content-center registerWrapper">
                                <div className="form-group wrap-input100">
                                    <label htmlFor="name">Name*</label>
                                    <input type="text" name="name" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter Name" />
                                </div>
                                <div className="form-group wrap-input100">
                                    <label htmlFor="email">Email address*</label>
                                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group wrap-input100">
                                    <label htmlFor="phone">Mobile No*</label>
                                    <input type="tel" name="phone" className="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Enter Contact No" />
                                </div>
                                <div className="form-group wrap-input100">
                                    <label htmlFor="password">Password*</label>
                                    <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="form-group wrap-input100">
                                    <label htmlFor="confirmPassword">Repeat Password*</label>
                                    <input type="password" name="confirmPassword" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                                </div>
                                <div className="container-login100-form-btn">
                                    <button type="submit" form="loginForm" className="login100-form-btn modalSubmitBtn" onClick={e => this.getSubmitBtnSignUp(e)}>Submit</button>
                                    <Link  to="/login" className="login login100-form-btn">Already a CSL customer?</Link>
                                </div>
                            </div>
                            <EmailSent show={this.state.signupDone} ></EmailSent>
                            {/* <img className="preloader" style={{display: none}} src="https://thumbs.gfycat.com/LoneDetailedFairybluebird-max-1mb.gif"></img> */}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
}