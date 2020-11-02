import React,{PureComponent}from 'react';
import {Redirect,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {LoginWrapper, LoginBox,Input, Button} from './style';
import {actionCreator} from './store';



class Login extends PureComponent{
  render(){
    const {loginStatus} = this.props;
    // console.log(loginStatus)
    if(!loginStatus){
      return(
        <LoginWrapper>
          <LoginBox>
            <Link to = "/">
              <span id = "cancel">&times;</span>
            </Link>
            <div className= "title-box"> 
              <span id = "highlight">Login</span> 
              <span>|</span>
               <Link to = "/register">
                  <span>Register</span>
               </Link>
            </div>
            <form>
              <Input>
                <input type="text" placeholder= "Username"  id = 'input1' ref = {(input) => {this.account = input}}/>
                <input type= "password" placeholder= "Password" id = 'input2'  ref = {(input) => {this.password = input}}/>
                </Input>
              <Button>
                <button onClick = {() => this.props.login(this.account, this.password)}>Login in</button>
              </Button>
            </form>
          </LoginBox>
        </LoginWrapper>
      ) 
    }else{
      return <Redirect to = '/'/>
    }
  }
}

//ref 通获取到dom

const mapState = (state) => ({
  loginStatus: state.getIn(['login','login'])
})


const mapDispatch = (dispatch) => ({
  login(accountElm,passwordElm){
    dispatch(actionCreator.login(accountElm.value,passwordElm.value))
  }
})

export default connect(mapState,mapDispatch)(Login)