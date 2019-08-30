import React from 'react';
import axios from 'axios';
import Modal from './Modal';

class navBar extends React.Component{
  state={

  }
  handleChange=(event)=>{
      event.preventDefault();
      const {name,value} = event.target;
      console.log(name,value)
      this.setState({[name]:value})
  }
  signUpSend=(event)=>{
      event.preventDefault();
      console.log(event.target)
      axios.post('/auth/signup',this.state).then(function(res){
        console.log(res)
        window.location.assign("/home")
      })
  }
    render(){
        return (
            <div className='navbarr'>
                <div className=''>
                    <h1 className='purpleFont'>Biznet Connects</h1>
                    <img src={process.env.PUBLIC_URL+'favicon.ico'} alt="logo" />
                    <form>
                      <div class="form-group">
                        <label className='text-muted'for="exampleInputEmail1">Company Name</label>
                        <input type="company" name='companyName' onChange={this.handleChange} class="form-control" id="companyName" aria-describedby="emailHelp" placeholder="Enter email" />
                      </div>
                      <div class="form-group">
                        <label className='text-muted' for="exampleInputEmail1">Email address</label>
                        <input type="email" name='email' onChange={this.handleChange} class="form-control" id="companyEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div class="form-group">
                        <label className='text-muted' for="exampleInputPassword1">Password</label>
                        <input type="password" name='password' onChange={this.handleChange} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                      <div class="form-group">
                        <label className='text-muted' for="exampleInputEmail1">Confrim Password</label>
                        <input type="password" name='confirmPassword' onChange={this.handleChange} class="form-control" id="companyPassword" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">Keep this safe till we launch</small>
                      </div>
                      <div class="form-group form-check">
                        <input type="checkbox" onChange={this.handleChange} class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label text-muted" for="exampleCheck1">Check me out</label>
                      </div>
                      <button type="submit" onClick={this.signUpSend} name={this.state.email}  data-company={this.state.companyName} data-pass={this.state.password} class="btn btn-primary">Submit</button>
                    </form>
                    {/* <i className="fas fa-bars" id='signUp'></i>
                    <i className="fas fa-bars" id='loginn'></i>
                    <Modal /> */}
                </div>
                
            </div>
        )
    }
}
export default navBar;