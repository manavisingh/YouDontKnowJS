import React from "react";

const ModalSignIn = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal d-block" : "modal d-none";
    return (
        <div className={showHideClassName}>
            <div className="modal-container signInModalContainer">
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="loginBtnWrapper">
                    <button type="submit" form="loginForm" className="login100-form-btn modalSubmitBtn">Submit</button>
                    <button type="button" form="loginForm" className="login100-form-btn modalSubmitBtn">Forgot Password?</button>
                </div>
                <button type="submit" className="login100-form-btn modalSubmitBtn signInCloseModal">
                    <a href="javascript:;" className="modal-close" onClick={handleClose}>Close</a>
                </button>
            </div>
        </div>
    );
};

export default ModalSignIn;