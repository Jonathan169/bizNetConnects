import React, {Component} from 'react';
import io from 'socket.io-client';
import {USER_CONNECTED,LOGOUT,VERIFY_USER,MESSAGE_SENT} from '../../events'
const socketUrl = "/"

export default class Messages extends Component{
  constructor(props) {
      super(props);

      this.state ={ 
          socket:null,
          user:null
      };
  }

  componentWillMount =()=>{
      this.initSocket()
  }

  initSocket =()=>{
      const socket = io(socketUrl)

      socket.on('connect',()=>{
        console.log('Connected')
      })

      this.setState({socket})
  }

//   setUser =(user) =>{
//     const { socket } = this.state;
//     socket.emit(USER_CONNECTED,user)
//     this.setState({user})
//   }
//   logout=()=>{
//       const {socket} = this.state;
//       socket.emit(LOGOUT);
//       this.setState({user:null})
//   }
  handleChange=(event)=>{
    event.preventDefault();
    const {name,value} = event.target;
    console.log(name,value)
    this.setState({[name]:value})
}

handleSubmit=(event)=>{
    event.preventDefault();
    const { socket } =this.props
    const { nickname } = this.state
    socket.emit(MESSAGE_SENT,nickname, this.setUser)
}
    render(){
        return (
            <div className='navbarr'>
                <div className=''>
                    <h1 className='purpleFont'>Biznet Connects</h1>
                    <img src={process.env.PUBLIC_URL+'favicon.ico'} alt="logo" />
                    <form>
                      <div class="form-group">
                        <label className='text-muted'for="exampleInputEmail1">Name</label>
                        <input type="company" name='companyName' onChange={this.handleChange} class="form-control" id="companyName" aria-describedby="emailHelp" placeholder="Enter email" />
                      </div>
                      <div class="form-group">
                        <label className='text-muted' for="exampleInputEmail1">Email address</label>
                        <input type="email" name='email' onChange={this.handleChange} class="form-control" id="companyEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div class="form-group">
                        <label className='text-muted' for="exampleInputEmail1">Message</label>
                        <input type="text" name='message' onChange={this.handleChange} class="form-control" id="companyPassword" aria-describedby="emailHelp" placeholder="Enter email" />
                      </div>
                      <div class="form-group form-check">
                        <input type="checkbox" onChange={this.handleChange} class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label text-muted" for="exampleCheck1">Check me out</label>
                      </div>
                      <button type="submit" onClick={this.signUpSend} name={this.state.email}  data-company={this.state.companyName} data-pass={this.state.password} class="btn btn-primary">Submit</button>
                    </form>
                </div>
                
            </div>
        )
    }
}