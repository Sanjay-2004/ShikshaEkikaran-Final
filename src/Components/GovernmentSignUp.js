import React, {useState, SetState} from "react";
import './GovernmentSignUp.css'

export const GovernmentSignUp = () => {
    return (
        <>
        <br/><br/><br/>
        <div className = "div">
            <h3>Sign Up</h3><br/>
            <form style={{"border":"none"}}>
                <label for = "firstName"><b>First name</b></label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <label for = "lastName"><b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Last name</b></label><br/>
                <input type="text" value = {firstName} onChange = {(e) => handleInputChange(e)} id = "firstName" />&emsp;
                <input type="text" value = {lastName} onChange = {(e) => handleInputChange(e)} id = "lastName"/><br/><br/>
                <label for = "emaiil"><b>Email</b></label><br/>
                <input type="text" style={{"width":"92%"}} value = {email} onChange = {(e) => handleInputChange(e)} id = "email" placeholder="example@gmail.com"/><br/><br/>
                <label for = "aadharCard"><b>Enter Aadhar Card Number</b></label><br/>
                <input type="text" style={{"width":"92%"}} value = {aadharCard} onChange = {(e) => handleInputChange(e)} id = "aadharCard"/><br/><br/>
                <label for = "password"><b>Password</b></label><br/>
                <input type="password" style={{"width":"92%"}} value = {password} onChange = {(e) => handleInputChange(e)} id = "password" placeholder="Enter at least 8 characters"/><br/><br/>
                <a href = "Governmentview">
                    <button onClick={() => handleSubmit()} type="submit">Sign Up</button>
                </a>
            </form>
        </div>
        <br/><br/><br/><br/><br/>
        <div id = "ContactUs" className = "footer">
            Contact
            <br/>
            Phone number: +917981961819
            <br/>
            Email: umangbasuthkar5@gmail.com
        </div>
        </>
    )
}