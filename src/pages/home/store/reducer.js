import {fromJS} from 'immutable';
import  * as constants from './constants';

//defaultState 为immutable 的数据，所以他们也会变成immutable的数组
const defaultState = fromJS({
  topicList: [],
  articleList : [],  
  writerList:[],
  articlePage: 1,
  showScroll:false,
  page: 1,
  totalPage: 1
});


//优化
const getHomeInfo = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    writerList: fromJS(action.writerList)
  });
}

const addHomeList = (state,action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  });
};



export default (state = defaultState, action) => {
  switch(action.type){
    case constants.GET_HOME_INFO:
      return getHomeInfo(state,action);

    case constants.ADD_HOME_LIST:
      return addHomeList(state,action);

    case constants.TOGGLE_TOP_SHOW:
      return state.set('showScroll', action.show);

    case constants.ADD_AUTHOR_LIST:
     return state.merge({
       list: action.data,
       totalPage: action.totalPage
     });

     case constants.CHANGE_AUTHOR_LIST:
       return state.set('page', action.page)
  
    default:
      return state;
  }
}



//原始代码
//fromJS: 把普通js转成immutable
// export default (state = defaultState, action) => {
//   switch(action.type){
//     case constants.GET_HOME_INFO:
//     return state.merge({
//       topicList: fromJS(action.topicList),
//       articleList: fromJS(action.articleList),
//       writerList: fromJS(action.writerList)
//     });

//     case constants.ADD_HOME_LIST:
//     return state.merge({
//       articleList: state.get('articleList').concat(action.list),
//       articlePage: action.nextPage
//     });

//     case constants.TOGGLE_TOP_SHOW:
//       return state.set('showScroll', action.show);
//     default:
//       return state;
//   }
// }


//原始写法：  state.set('topicList', fromJS(action.topicList)).set('articleList', fromJS(action.articleList)).set('writerList',fromJS(action.writerList))

// case constants.ADD_HOME_LIST:
// return state.set('articleList', state.get('articleList').concat(action.list))
