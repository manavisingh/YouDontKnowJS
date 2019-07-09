import React from "react";

const ForgotPassword = ({ show }) => {
    const showHideClassName = show ? "modal d-block forgotPassBlock" : "modal d-none";
    return (
        <div className={showHideClassName}>
            <div className="modal-container forgotPasswordPopup">
                <div className="form-group">
                    <label htmlFor="emailForgotPwd">Email address</label>
                    <input type="email" name="emailForgotPwd" className="form-control" id="emailForgotPwd" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="sendPwdLinkBtn">
                    <button type="button" form="loginForm" className="login100-form-btn modalSubmitBtn">Send Link</button>
                </div>
                <footer>
                    <p>Click on <i>Send Link</i> and check your email for a link to change your password</p>
                </footer>
            </div>
        </div>
    );
};

export default ForgotPassword;