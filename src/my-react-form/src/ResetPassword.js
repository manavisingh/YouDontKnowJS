import React, { Component } from 'react';

export default class ResetPassword extends Component {
    changePassword(event){
        event.preventDefault();
        var data = new FormData(event.target);
        var dataJson = JSON.parse(stringifyFormData(data));
        var url = '/forgotPassword';
        var dataResetPwd = {
            "email": "",
            "password": dataJson.newpassword
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            mode: "cors",
            body: JSON.stringify(dataResetPwd)
        }).then(response => {
            
        })
    }

    render() {
        return (
            <div className="container-login100">
                <div className="wrap-login100 modal-container">
                    <form className="container" id="loginForm" noValidate onSubmit={e => this.changePassword(e)}>
                        <div className="form-group">
                            <label htmlFor="newpassword">Enter New Password</label>
                            <input type="password" name="newpassword" className="form-control" id="newpassword" placeholder="Enter New Password Here" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPass">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPass" placeholder="Confirm Password" />
                        </div>
                        <div className="loginBtnWrapper">
                            <button type="submit" form="loginForm" className="login100-form-btn modalSubmitBtn">Change Password</button>
                            {/* <Link to="/forgotpassword"><button type="button" form="loginForm" className="login login100-form-btn modalSubmitBtn">Forgot Password?</button></Link> */}
                        </div>
                    </form>
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
