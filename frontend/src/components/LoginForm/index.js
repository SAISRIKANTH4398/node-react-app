//import {Redirect} from 'react-router-dom'
import { Component } from "react";
import './index.css'

class LoginForm extends Component {
    state={firstName: '', emailId: '',errorMsg:'',showSubmitError: false}

    onSubmitForm = event => {
        event.preventDefault()
       const {history} = this.props 
       const{firstName, emailId} = this.state

       if(firstName==="" && emailId===""){
           this.setState({errorMsg: "Please Enter Valid Details",showSubmitError:true})
       }
       else{
       history.replace("/home")
       }
    
    }

    onChangeemailId = event => {
        this.setState({emailId: event.target.value})
    }

    onChangeFirstName = event => {
        this.setState({firstName: event.target.value})
    }

    renderEmailField = () => {
        const {emailId} = this.state
        
        return(
            <>
            <label htmlFor="emailId" className="input-label">EMAILID</label>
            <input className="input-field" type="text" id="emailId" value={emailId} onChange={this.onChangeemailId} />
            </>
        )
    }

    renderFirstNameField = () => {
        const {firstName} = this.state

        return(
            <>
            <label htmlFor="firstName" className="input-label">FIRSTNAME</label>
            <input className="input-field" type="text" id="firstName" value={firstName} onChange={this.onChangeFirstName} />
            </>
        )
    }

    render() {
        const {errorMsg, showSubmitError} = this.state
        return(
            <div className="login-form-container">
                <form className="form-container" onSubmit={this.onSubmitForm}>
                    <div className="input-container">{this.renderFirstNameField()}</div>
                    <div className="input-container">{this.renderEmailField()}</div>
                    <button type="submit" className="login-button">Login</button>
                    {showSubmitError && <p className="error-message">*{errorMsg}</p>}
                </form>
            </div>
        )
    }
}

export default LoginForm