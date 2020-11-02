import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

export const searchFocus = () => ({
  type : constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});


export const mouseEnter = () =>({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const updateContent = (page) => ({
  type: constants.UPDATE_CONTENT,
  page
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/interface/headerList.json').then(
      (res) => {
        const data = res.data;
        dispatch(changeList(data.data)); // from 接口
      }).catch(
        () => {
            console.log('Error');
    });
  };
};


// 变成immutable类型，数据也就是immutable的数据类型。如果不加fromJS,那么data就是普通的data，为了数组类型统一
const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10) //取整, 一页上显示10个
})
