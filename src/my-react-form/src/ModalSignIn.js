import React from "react";
import { Link } from "react-router-dom";
import SAF from './SAF';

const ModalSignIn = () => {


    function stringifyFormData(fd) {
        const data = {};
        for (let key of fd.keys()) {
            data[key] = fd.get(key);
        }
        return JSON.stringify(data, null, 2);
    }

    //const showHideClassName = show ? "modal d-block" : "modal d-none";
    function signInUser(event) {
        event.preventDefault();
        var data = new FormData(event.target);
        var dataJson = JSON.parse(stringifyFormData(data));
        var urlsignin = 'http://13.235.126.110:3000/login';
        var dataToSendSignIn = {
            "email": dataJson.emailSignIn,
            "password": dataJson.passwordSignIn
        }
        fetch(urlsignin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            mode: "cors",
            body: JSON.stringify(dataToSendSignIn)
        }).then(response => {
            if (response.ok) {
                console.log(response);
                window.location.href = '/saf';
                //return <div>{SAF}</div>;
            }
        })
    }
    return (
        <div className="container-login100">
            <div className="wrap-login100 modal-container">
                <form className="container login100-form" id="loginForm" noValidate onSubmit={e => signInUser(e)}>
                    <div className="modal-container signInModalContainer">
                        <div className="form-group">
                            <label htmlFor="emailSignIn">Email address</label>
                            <input type="email" name="emailSignIn" className="form-control" id="emailSignIn" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordSignIn">Password</label>
                            <input type="password" name="passwordSignIn" className="form-control" id="passwordSignIn" placeholder="Password" />
                        </div>
                        <div className="loginBtnWrapper">
                            <button type="submit" form="loginForm" className="login100-form-btn modalSubmitBtn">Submit</button>
                            <Link to="/forgotpassword"><button type="button" form="loginForm" className="login login100-form-btn modalSubmitBtn">Forgot Password?</button></Link>
                        </div>
                        {/* <button type="submit" className="login100-form-btn modalSubmitBtn signInCloseModal submitExistingUser">
                        <a href="javascript:;" className="modal-close" onClick={handleClose}>Close</a>
                    </button> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalSignIn;