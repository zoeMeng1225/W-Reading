import React,{PureComponent}from 'react';
import {connect} from 'react-redux';
import IntroList from './componnents/IntroList';
import { withRouter } from 'react-router-dom';
import AuthorInfo from './componnents/AuthorInfo';
import RelateBook from './componnents/RelatedBook';
import {DetailWrapper,DetailLeft,DetailRight} from './style';
import {actionCreator} from './store';
// import axios from 'axios';



class Detail extends PureComponent{
  render(){
    return(
      <DetailWrapper>
        <DetailLeft>
          <IntroList></IntroList>
        </DetailLeft>
        <DetailRight>
          <AuthorInfo></AuthorInfo>
          <RelateBook></RelateBook>
        </DetailRight>
      </DetailWrapper>
    )
  }
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id);
    this.props.getRelatedDetail();
    this.props.getLoadMore(this.props.match.params.id);
  }
}

const mapDispatch = (dispatch) => ({
  getDetail(id){
    dispatch(actionCreator.getDetail(id))
  },
  getRelatedDetail(){
    dispatch(actionCreator.getRelatedDetail())
  },
  getLoadMore(id){
    dispatch(actionCreator.getLoadMore(id))
  }
})

export default connect(null,mapDispatch)(withRouter(Detail))