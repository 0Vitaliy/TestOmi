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
       submitBtn:'submitBtn',
       zapros:'zaprosNone'

   }

    // setfirstName=(e)=>{
    //
    //         this.setState({firstName: e.target.value});
    //
    // }
    // setlastName=(e)=>{
    //     this.setState({
    //         lastName: e.target.value
    //     })
    // }
    // setEmail=(e)=>{
    //     this.setState({
    //         email: e.target.value
    //     })
    // }
    // setPhone=(e)=>{
    //     this.setState({
    //         phone: e.target.value
    //     })
    // }
    // setDescription=(e)=>{
    //     this.setState({
    //         description: e.target.value
    //     })
    // }
    // setCompany=(e)=>{
    //     this.setState({
    //         company: e.target.value
    //     })
    // }
    // setCountry=(e)=>{
    //     this.setState({
    //         country: e.target.value
    //     })
    // }
    // setInterested=(e)=>{
    //     this.setState({
    //         interested: e.target.value
    //     })
    // }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
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
    "files_id": [1],
    "first_name": this.state.firstName,
    "interest":this.state.interested,
    "last_name": this.state.lastName,
    "phone": this.state.phone})
}).then( this.setState({
                    submitBtn: "submitBtn",
                    zapros:"zaprosNone"
                }))
            };
    // BtnClick=()=>{
    //     this.setState({
    //         submitBtn: "btnNone"
    //     });
    //
    //     this.PostFeth();
    //
    // };
    handleSubmit=(e)=>{
       e.preventDefault();


       if(!this.state.firstName ){
           this.setState({
               error: "errorBlock"
           })
       }
        this.setState({
            submitBtn: "btnNone",
            zapros:"zaprosBlock"
        });
     setTimeout( this.PostFeth,2000)




       console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.email);
        console.log(this.state.phone);
        console.log(this.state.description);
        console.log(this.state.company);
        console.log(this.state.country);
        console.log(this.state.interested);

    }
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
                  <Input lastName="width1" placeholder="First name" name='firstName' onChange={this.handleUserInput} value={this.state.firstName} error={this.state.error}/>
                  <Input lastName="width1" placeholder="Last name" name='lastName' onChange={this.handleUserInput} value={this.state.lastName} error={this.state.error}/>
              </div>
              <Input lastName="width"  placeholder="E-mail" name='email' onChange={this.handleUserInput} value={this.state.email} error={this.state.error}/>
              <Input lastName="width"  placeholder="Phone" name='phone' onChange={this.handleUserInput} value={this.state.phone} error={this.state.error}/>
              <select onChange={(e)=>this.handleUserInput(e)} name='company' value={this.state.company}>
                  <option>Company</option>
                  <option>English</option>
                  <option>Spanish</option>
              </select>
              <select onChange={(e)=>this.handleUserInput(e)} name='country' value={this.state.country}>
                  <option>Country</option>
                  <option>English</option>
                  <option>Spanish</option>
              </select>
              <select onChange={(e)=>this.handleUserInput(e)} name='interested' value={this.state.interested}>
                  <option>I an interested in</option>
                  <option>English</option>
                  <option>Spanish</option>
              </select>
              <Input lastName="width"  placeholder="Description..." name='description' onChange={this.handleUserInput} value={this.state.description} error={this.state.error}/>
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
