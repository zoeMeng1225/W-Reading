import axios from 'axios';
import { contants } from '.';

const changeLogin = () => ({
  type: contants.CHANGE_LOGIN,
  value: true     //表示登陆成功
})

export const logout = () => ({
  type: contants.CHANGE_LOGOUT,
  value: false
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/interface/login.json?account=' + account + '&password=' + password)
    .then((res) => {
        const result = res.data.data;
        if(result){
          dispatch(changeLogin())
        }else{
          alert('login is faild')
        }
    })
  }
}