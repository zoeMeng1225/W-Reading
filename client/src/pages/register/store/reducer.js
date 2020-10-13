import {fromJS} from 'immutable';
import  * as constants from './constants';

const defaultState = fromJS({
  username: "",
  password: "",
  password_comfirmation: "",
  registerError: ""
})