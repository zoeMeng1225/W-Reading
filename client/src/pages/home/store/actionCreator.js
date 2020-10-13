import  * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

//重新建立一个changHomeData 来存储这些数据
const changHomeData = (result) => ({
  type: constants.GET_HOME_INFO,
  topicList: result.topicList,
  articleList: result.articleList,
  writerList: result.writerList,
});


const changeWriterData = (data) => ({
  type: constants.ADD_AUTHOR_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 6)
});

export const getHomeInfo = () => {
  return(dispatch) => {
    axios.get('/interface/home.json').then((res) => {
      const result = res.data.data; //data.data 从concole里面来的
      // const action = changHomeData(result);
      dispatch(changHomeData(result));
      dispatch(changeWriterData(result.writerList));
    }).catch(()=> {
      console.log('error');
    });
  };
};


//帮助创建一个actoin, return 一个对象
export const addHomeList = (list,nextPage,data) => ({
  type: constants.ADD_HOME_LIST,
  list: fromJS(list),
  nextPage
})

export const getMoreList = (page) => {
  return(dispatch) => {
    axios.get('/interface/homeLoadMore.json?page=' + page).then((res) =>{
      const result = res.data.data;
      // console.log(result)
      dispatch(addHomeList(result,page + 1));
    }).catch(
      () => {
          console.log('Error');
  });
  };
};

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_TOP_SHOW,
  show
})

export const changePageAuthor = (page) => ({
  type: constants.CHANGE_AUTHOR_LIST,
  page
})


