import React, { Component } from 'react';

const EmailSent = ({show}) => {
    const showHideClassName = show ? "modal d-block emailSentBlock" : "modal d-none";
        return (
            <div className={showHideClassName}>
                <div className="emailSentPopup">
                    <span>An email has been sent to your registered mail id. </span>
                    <span>Please click on the link provided in the email to authenticate and Login again...</span>
                </div>
            </div>
        )

}

export default EmailSent;