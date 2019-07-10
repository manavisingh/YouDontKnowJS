import React from "react"

const VerifyUser = () => {
    function authorizeUser(){
        var url = "http://13.235.126.110:3001/register/authorize?token=";
        var location = window.location.href;
        var token = location.split('=')[1];
        url += token;
        console.log(url);
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            mode: "cors",
        }).then(response => {
            console.log(response);
            if (response.ok){
                window.location = "/login";
            }
        })    
    }
    return (
        <div>
            <div className="container-login100">
                <div className="wrap-login100 modal-container verifyUser">
                    <p>We are processing your account.... Please click on Proceed to verify and Login</p>
                    <button className="login100-form-btn modalSubmitBtn" type="button" onClick={e => authorizeUser(e)}>Proceed</button>
                </div>
            </div>
        </div>
    )
}

export default VerifyUser