import React from "react";
import { Link } from "react-router-dom";

const SAF = () => {
    var state = {
        value: 'personal',
    };

    function handleChange(event) {
        this.setState({ value: event.target.value });
    }

    return (
        <div className="container-login100">
            <div className="wrap-login100 modal-container safWrapper">
                <form className="container login100-form" id="loginForm" noValidate>
                    <div className="modal-container safContainer">
                        <div className="form-group">
                            <label htmlFor="pan">PAN</label>
                            <input type="text" name="pan" className="form-control" id="pan" placeholder="Enter PAN Number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="loanAmount">Loan Amount</label>
                            <input type="number" name="loanAmount" className="form-control" id="loanAmount" placeholder="Enter Loan Amount" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="product">Product</label>
                            <select name="product" value={state.value} onChange={e => handleChange(e)} className="input100 product">
                                <option value="personal">Personal</option>
                                <option value="business">Business</option>
                                <option value="unsecured">Unsecured Business Loan</option>
                                <option value="collateral">Loan against Collateral</option>
                                <option value="invoice">Invoice Financing</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="constitution">Constitution</label>
                            <input type="text" name="constitution" className="form-control" id="constitution" placeholder="Constitution" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="incorporationDate">Date of Incorporation</label>
                            <input type="date" name="incorporationDate" className="form-control" id="incorporationDate" placeholder="Date of Incorporation" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="business">Nature Of Business</label>
                            <input type="text" name="business" className="form-control" id="business" placeholder="Nature Of Business" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="collateral">Value of Collateral</label>
                            <input type="date" name="collateral" className="form-control" id="collateral" placeholder="Value of Collateral" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="date" name="address" className="form-control" id="address" placeholder="Enter Address" />
                        </div>
                        {/* <div className="loginBtnWrapper">
                            <button type="submit" form="loginForm" className="login100-form-btn modalSubmitBtn">Submit</button>
                            <Link to="/forgotpassword"><button type="button" form="loginForm" className="login login100-form-btn modalSubmitBtn">Forgot Password?</button></Link>
                        </div> */}
                        {/* <button type="submit" className="login100-form-btn modalSubmitBtn signInCloseModal submitExistingUser">
                        <a href="javascript:;" className="modal-close" onClick={handleClose}>Close</a>
                    </button> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SAF;