// 管理
import * as constants from './constants';
import {fromJS} from 'immutable'; // 把js 对象转成immutable 对象

//state 变成一个immutable 对象
const defaultState = fromJS({
  focused : false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});


//导出纯函数: 给定固定的输入，得出固定的输出
 //immutable 对象的set 会结合之前的immutable 对象的值 和设置的值返回一个全新的对象，并不会改原始数据。

//优化过的
export default (state = defaultState, action) => {
  switch(action.type){
    case constants.SEARCH_FOCUS : 
    return state.set('focused', true);
    //没有跟break是因为后面return
    case constants.SEARCH_BLUR:
    return state.set('focused', false);
    
    case constants.CHANGE_LIST:
    return state.merge({
      list: action.data,
      totalPage: action.totalPage
    });
    //merge: 可以同时改变多个数据内容，相当于多次调用set,但是性能更高，因为只merge一次，而set要 调用几次就要返回几次immutable数据
    // state.set('list', action.data).set('totalPage', action.totalPage);

    case constants.MOUSE_ENTER:
    return state.set('mouseIn', true);

    case constants.MOUSE_LEAVE:
    return state.set('mouseIn', false);

    case constants.UPDATE_CONTENT:
    return state.set('page', action.page);

    default:
    return state;
  }
};

// 没有优化的
  // if(action.type === constants.SEARCH_FOCUS){
  //   return state.set('focused', true)
  // }

  // if(action.type === constants.SEARCH_BLUR){
  //   return state.set('focused', false)
  // }

  // if(action.type === constants.CHANGE_LIST){
  //   return state.set('list', action.data);
  // }
