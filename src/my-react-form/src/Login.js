import React, { Component } from 'react';
import ModalSignUp from './ModalSignUp';
import ModalSignIn from './ModalSignIn';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'personal' };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        var url = '/test/url';
        var data = new FormData(event.target);
        sendData(url, stringifyFormData(data));
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    modalOpen(event) {
        var modalClickedClass = event.target.className;

        if (modalClickedClass.indexOf('apply') !== -1){
            this.setState({ 
                modalSignIn: false,
                modalSignUp: true 
            });
        }
        else {
            this.setState({ 
                modalSignUp: false,
                modalSignIn: true 
            });
        }
    }

    modalClose(event) {
        this.setState({
            modalInputName: "",
            modalSignUp: false,
            modalSignIn: false
        });
    }

    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="container login100-form" id="loginForm" noValidate onSubmit={e => this.handleFormSubmit(e)}>
                            <div className="row d-flex flex-column align-items-center justify-content-center">
                                <div className="wrap-input100">
                                    <label className="input100">Amount</label>
                                    <input className="input100" type="number" name="amount" />
                                </div>
                                <div className="wrap-input100">
                                    <label className="input100">Product</label>
                                    <select name="product" value={this.state.value} onChange={e => this.handleChange(e)} className="input100">
                                        <option value="personal">Personal</option>
                                        <option value="business">Business</option>
                                        <option value="unsecured">Unsecured Business Loan</option>
                                        <option value="collateral">Loan against Collateral</option>
                                        <option value="invoice">Invoice Financing</option>
                                    </select>
                                </div>
                                <div className="userInfo input100">
                                    <span>New User?</span>
                                    <span>Existing User?</span>
                                </div>
                                <div className="container-login100-form-btn">
                                    <button onClick={e => this.modalOpen(e)} type="button" className="apply login100-form-btn">Apply Now</button>
                                    <button onClick={e => this.modalOpen(e)} type="button" className="login login100-form-btn">Login</button>
                                </div>
                                <ModalSignUp show={this.state.modalSignUp} handleClose={e => this.modalClose(e)}></ModalSignUp>
                                <ModalSignIn show={this.state.modalSignIn} handleClose={e => this.modalClose(e)}></ModalSignIn>
                            </div>
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

function sendData(url, data) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function (response) {
        console.log(response);
    });
}