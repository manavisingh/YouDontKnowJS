import React from "react";

const ModalSignUp = ({ handleClose, show, children, submitButton }) => {
    const showHideClassName = show ? "modal d-block" : "modal d-none";

    return (
        <div className={showHideClassName}>
            <div className="modal-container signUpModalContainer">
                <div className="form-group">
                    <label htmlFor="name">Name*</label>
                    <input type="text" name="name" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address*</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Mobile No*</label>
                    <input type="tel" name="phone" className="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Enter Contact No" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password*</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Repeat Password*</label>
                    <input type="password" name="confirmPassword" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                </div>
                <button type="submit" form="loginForm" className="login100-form-btn modalSubmitBtn" onClick={submitButton}>Submit</button>
                <button type="submit" className="login100-form-btn modalSubmitBtn submitewUser">
                    <a href="javascript:;" className="modal-close" onClick={handleClose}>Close</a>
                </button>
            </div>
        </div>
    );
};

export default ModalSignUp;