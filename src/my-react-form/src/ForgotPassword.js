import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    //const showHideClassName = show ? "modal d-block forgotPassBlock" : "modal d-none";
    function forgorPwd(){
        var email = document.getElementById('emailForgotPwd').value;
        var url = 'http://13.235.126.110:3000/forgotPassword/resetlink?email=' + email;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            mode: "cors",
        }).then(response => {
            console.log(response);
            if (response.ok){
                window.location = "/resetPwdLinkSent";
            }
        })
    }
    return (
        <div className="container-login100">
            <div className="wrap-login100 modal-container">
                <div className="modal-container forgotPasswordPopup">
                    <div className="form-group">
                        <label htmlFor="emailForgotPwd">Email address</label>
                        <input type="email" name="emailForgotPwd" className="form-control" id="emailForgotPwd" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="sendPwdLinkBtn">
                        <button type="button" form="loginForm" className="login100-form-btn modalSubmitBtn" onClick={e => forgorPwd(e)}>Send Link</button>
                    </div>
                    <footer>
                        <p>Click on <i>Send Link</i> and check your email for a link to change your password</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;