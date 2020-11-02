import {fromJS} from 'immutable';
import * as constants from './constants';


const defaultState = fromJS ({
  topicList: [],
  articleList:[],  
  writerList:[],
  relatedList:[],
  loadMore:[],
  following: false
})


const getDetail = ((state,action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    writerList:fromJS(action.articleList)
  })
})

const getRelatedDetail = ((state,action) => {
  return state.merge({
    relatedList:fromJS(action.relatedList)
  })
})

const getLoadMore = ((state,action) => {
  return state.merge({
    loadMore:fromJS(action.loadMore)
  })
})



export default (state = defaultState, action) => {
  switch(action.type){
    case constants.CHANGE_DETAIL:
      return getDetail(state, action);

    case constants.CHANGE_RELATED:
      return getRelatedDetail(state, action);
  
    case constants.LOAD_MORE:
        return getLoadMore(state,action);

    case constants.FOLLOW:
        return state.set('following', action.value)
    
    case constants.UNFOLLOW:
      return state.set('following', action.value)    
    default: 
      return state;
  }
}


