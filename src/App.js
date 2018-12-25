import React, { Component } from 'react';
import './App.css';
import Input from "./component/Input";
import smartp from './img/smartphone.png';
import loader from './img/loader.svg';


class App extends Component {
   state={
       firstName:null,
       lastName:null,
       email:null,
       phone:null,
       description:null,
       company:null,
       country:null,
       interested:null,
       error:'error',
       errorPhone:'error',
       errorEmail:'error',
       errorfirstName:'error',
       errorlastName:'error',
       errorDescription: 'error',
       submitBtn:'submitBtn',
       zapros:'zaprosNone',
   }


    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case 'firstName':
                var firstNameValid = value.match(/^[a-zA-Z][a-zA-Z0-9-_]{3,20}$/);
                if (firstNameValid) {
                    this.setState({errorfirstName: 'error'});
                    e.target.style.border = " 1px solid white";

                } else {
                    this.setState({errorfirstName: 'errorBlock'});
                    e.target.style.border = " 1px solid #f2d422";
                }
                break;
            case 'lastName':
                var lastNameValid = value.match(/^[a-zA-Z][a-zA-Z0-9-_]{3,20}$/);
                if (lastNameValid) {
                    this.setState({errorlastName: 'error'});
                    e.target.style.border = " 1px solid white";

                } else {
                    this.setState({errorlastName: 'errorBlock'});
                    e.target.style.border = " 1px solid #f2d422";
                }
                break;
            case 'email':
                var emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                if (emailValid) {
                    this.setState({errorEmail: 'error'});
                    e.target.style.border = " 1px solid white";

                } else {
                    this.setState({errorEmail: 'errorBlock'});
                    e.target.style.border = " 1px solid #f2d422";
                }
                break;
          case 'phone':

            var phoneValid = value.match( /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12,14}(\s*)?/);
            if( phoneValid){
                this.setState({errorPhone:'error'});
                e.target.style.border=" 1px solid white";

            }else {
                this.setState({errorPhone:'errorBlock'});
                e.target.style.border=" 1px solid #f2d422";
            }
            break;
            case 'description':
                var descriptionValid = value.match(/^[a-zA-Z][a-zA-Z0-9-_]{5,40}$/);
                if (descriptionValid) {
                    this.setState({errorDescription: 'error'});
                    e.target.style.border = " 1px solid white";

                } else {
                    this.setState({errorDescription: 'errorBlock'});
                    e.target.style.border = " 1px solid #f2d422";
                }
                break;

        }

        this.setState({[name]: value});

    }

   PostFeth=()=>{
                fetch('http://104.248.142.126:9999/api/v1/messages', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    "comment": this.state.firstName,
    "company": this.state.company,
    "country": this.state.country,
    "email": this.state.email,
    // "files_id": [1],
    "first_name": this.state.firstName,
    "interest":this.state.interested,
    "last_name": this.state.lastName,
    "phone": this.state.phone})
}).then( this.setState({
                    submitBtn: "submitBtn",
                    zapros:"zaprosNone",
                    firstName:'',
                    lastName:'',
                    email:'',
                    phone:'',
                    description:'',
                    company:'',
                    country:'',
                    interested:'',
                    formValid:false
                }))
            };

    handleSubmit=(e)=>{
        e.preventDefault();
        // if(typeof(this.state.firstName)==="string" && this.state.errorfirstName==='error'
        //     &&typeof(this.state.lastName)==="string" && this.state.errorlastName==='error'
        //     &&typeof(this.state.email)==="string" && this.state.errorEmail==='error'
        //     &&typeof(this.state.phone)==="string" && this.state.errorPhone==='error'
        //     &&typeof(this.state.description)==="string" && this.state.errorDescription==='error'){
        //
        //     this.setState({formValid: true});
        //
        // }

       if(typeof(this.state.firstName)==="string" && this.state.errorfirstName==='error'
           &&typeof(this.state.lastName)==="string" && this.state.errorlastName==='error'
           &&typeof(this.state.email)==="string" && this.state.errorEmail==='error'
           &&typeof(this.state.phone)==="string" && this.state.errorPhone==='error'
           &&typeof(this.state.description)==="string" && this.state.errorDescription==='error') {
            this.setState({
                submitBtn: "btnNone",
                zapros: "zaprosBlock"
            });
            setTimeout(this.PostFeth, 2000)

        }else {
           if (this.state.errorfirstName==='error' && !this.state.firstName) {
               this.setState({
                   errorfirstName: 'errorBlock',
               });
           }
           if (this.state.errorlastName==='error' && !this.state.lastName) {
               this.setState({
                   errorlastName: 'errorBlock',
               });
           }
           if (this.state.errorEmail==='error' && !this.state.email) {
               this.setState({
                   errorEmail: 'errorBlock',
               });
           }
           if (this.state.errorPhone==='error' && !this.state.phone) {
               this.setState({
                   errorPhone: 'errorBlock',
               });
           }
           if (this.state.errorDescription==='error' && !this.state.description) {
               this.setState({
                   errorDescription: 'errorBlock',
               });
           }
       }
    };
  render() {

    return (
      <div className="App">
          <div className="contacts">
              <h2>Contact us</h2>

                  <img className="imgSmart" src={smartp} />


              <label for="file">Attach project details
                  <br/>
                  (RFP, RFO, RFT)</label>
              <input type='file' id="file" className="inputFile"/>
          </div>
          <form className="form" onSubmit={this.handleSubmit} >
              <div className="Name">
                  <Input lastName="width1" placeholder="First name" name='firstName' onChange={this.handleUserInput} value={this.state.firstName} error={this.state.errorfirstName}/>
                  <Input lastName="width1" placeholder="Last name" name='lastName' onChange={this.handleUserInput} value={this.state.lastName} error={this.state.errorlastName}/>
              </div>
              <Input lastName="width"  placeholder="E-mail" name='email' onChange={this.handleUserInput} value={this.state.email} error={this.state.errorEmail}/>
              <Input lastName="width"  placeholder="Phone" name='phone' onChange={this.handleUserInput} value={this.state.phone} error={this.state.errorPhone}/>
              <select onChange={(e)=>this.handleUserInput(e)} name='company' value={this.state.company}>
                  <option disabled selected>Company</option>
                  <option>Omisoft</option>
                  <option>Google</option>
              </select>
              <select onChange={(e)=>this.handleUserInput(e)} name='country' value={this.state.country}>
                  <option disabled selected>Country</option>
                  <option>Ukraine</option>
                  <option>USA</option>
                  <option>England</option>
              </select>
              <select onChange={(e)=>this.handleUserInput(e)} name='interested' value={this.state.interested}>
                  <option disabled selected>I an interested in</option>
                  <option>Front-end</option>
                  <option>Back-end</option>
              </select>
              <Input lastName="width"  placeholder="Description..." name='description' onChange={this.handleUserInput} value={this.state.description} error={this.state.errorDescription}/>
              <span className={this.state.zapros} ><img src={loader}/></span>

              <button type="submit" className={this.state.submitBtn}  >
                  contact our team
              </button>
          </form>
      </div>
    );
  }
}

export default App;
