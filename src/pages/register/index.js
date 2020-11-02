import React,{PureComponent}from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {RegiWrapper,RegiBox,Input,Button} from './style';
import axios from 'axios';
// import {actionCreator} from './store';



class Register extends PureComponent{
  constructor(props){
    super(props);
  
  this.state = {
    username: "",
    password: "",
    passwordComfirmation: "",
    registerError: ""
  }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleSubmit(event){
    const {username, password, passwordComfirmation} = this.state;

    axios.post("http://localhost:3000/register", {
      user: {
        username: username,
        password: password,
        passwordComfirmation:passwordComfirmation
      }
    },{
      withCredentials: true   //set back cookies for your users，如果post 的时候一定要有这个
    }).then(response => {
      console.log('user registed', response);
    }).catch(error => {
      console.log('register error', error);
    })
    event.preventDefault(); //取消事件的默认动作
  }

  handleChange(event){
    // console.log(event.target)// user 在输入框里输入的内容；
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
      return(
        <RegiWrapper>
          <RegiBox>
            <Link to = "/">
              <span id = "cancel">&times;</span>
            </Link>
            <div className= "title-box"> 
              <Link to = "/login">
                <span id = "span1">Login</span>
              </Link> 
              <span>|</span>
              <span id = "highlight">Register</span>   
            </div>
            <form onSubmit = {this.handleSubmit}>
              <Input>
                <input 
                  type="username" 
                  name = "username" placeholder= "Username"  
                  id = 'input1'
                  value = {this.state.username} 
                  onChange = {this.handleChange} required/>

                <input 
                  type= "password" 
                  name= "password" 
                  placeholder= "Password" 
                  id = 'input2'
                  value = {this.state.password}
                  onChange = {this.handleChange}
                  required/>

                <input 
                  type= "password" 
                  name= "passwordComfirmation" 
                  placeholder= "Comfirm password" 
                  id = 'input3'
                  value = {this.state.passwordComfirmation}
                  onChange = {this.handleChange}
                  required/>
              </Input>
              <Button>
                <button>Sign up</button>
              </Button>
            </form>
          </RegiBox>
        </RegiWrapper>
      )
    }

    
}





export default Register;