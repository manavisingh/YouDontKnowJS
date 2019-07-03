import React from "react";

const ModalSignIn = ({ handleClose, show, children, submitButton}) => {
    const showHideClassName = show ? "modal d-block" : "modal d-none";
    return (
        <div className={showHideClassName}>
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
                    <button type="submit" form="loginForm" className="login100-form-btn modalSubmitBtn" onClick={submitButton}>Submit</button>
                    <button type="button" form="loginForm" className="login100-form-btn modalSubmitBtn">Forgot Password?</button>
                </div>
                <button type="submit" className="login100-form-btn modalSubmitBtn signInCloseModal submitExistingUser">
                    <a href="javascript:;" className="modal-close" onClick={handleClose}>Close</a>
                </button>
            </div>
        </div>
    );
};

export default ModalSignIn;