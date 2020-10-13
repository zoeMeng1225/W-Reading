import {fromJS} from 'immutable';
import  * as constants from './constants';

//defaultState 为immutable 的数据，所以他们也会变成immutable的数组
const defaultState = fromJS({
  login: false,
  username: "",
  password: "",
  loginErrors: ""
})

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.CHANGE_LOGIN: 
    return state.set('login', action.value);
    case constants.CHANGE_LOGOUT: 
    return state.set('login', action.value);
    default:
      return state;
  }
}