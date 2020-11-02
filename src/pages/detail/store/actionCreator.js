import  * as constants from './constants';
import axios from 'axios';


const changeDetailData = (result) => ({
  type: constants.CHANGE_DETAIL,
  topicList: result.topicList,
  articleList: result.articleList,
  writerList: result.writerList
})

export const getDetail = (id) => {
  return(dispatch) => {
    axios.get('/interface/home.json?id=' + id ).then((res) => {
      // console.log(id)
      const idNum = +id;
      const result = res.data.data;
      const obj = {
        topicList: result.topicList.filter(item => item.id === idNum),
        articleList: result.articleList.filter(item => item.id === idNum),
        writerList: result.writerList.filter(item => item.id === idNum)
      }

      // console.log(result.topicList)
      dispatch(changeDetailData(obj));
    }).catch((error) =>{
      console.log(error + ' , please try again');
    })
  }
}

export const getRelatedDetail = () => {
  return(dispatch) => {
    axios.get('/interface/related.json').then(
      (res) => {
         const result = res.data.data;
         dispatch(changeRelated(result));
      })
  }
}

const changeRelated = (result) => ({
  type: constants.CHANGE_RELATED,
  relatedList:result.relatedList
})


export const getLoadMore = (id) => {
  return(dispatch) => {
    axios.get('/interface/homeLoadMore.json?id=' + id).then(
      (res) => {
         const idNum = +id;
         const result = res.data.data;
        //  console.log(typeof(id))
         const obj = {
          loadMore: result.filter((item) => item.id === idNum)
        }
        dispatch(changeGetMore(obj))
      })
  }
}

const changeGetMore = (result) => ({
  type:constants.LOAD_MORE,
  loadMore:result.loadMore
});

// following: 
const getFollow = () => ({
  type: constants.FOLLOW,
  value: true
});

export const unFollow = () => ({
  type: constants.UNFOLLOW,
  value: false
})

export const followData = () => {
  return (dispatch) => {
    axios.get('/interface/follow.json').
    then((res) =>{
      const result = res.data.data;
      dispatch(getFollow(result));
    });
  };
};


