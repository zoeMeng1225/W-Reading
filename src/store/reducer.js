import {combineReducers} from 'redux-immutable'; // redux的方法， 可以把小的reducers 合成一个大的reducer
import { reducer as headerReducer} from '../common/header/store';
import { reducer as homeReducer} from '../pages/home/store/';
import {reducer as detailReducer } from '../pages/detail/store';
import {reducer as loginReducer } from '../pages/login/store';
//as 起别名
//不写reducer as homeReducers 的原因是


// 合并所有小的reducers

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
});

export default reducer;

