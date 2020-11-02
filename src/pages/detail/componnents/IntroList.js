import React, {PureComponent} from 'react';
import {DetailTitle,DetailHeader,DetailContent} from '../style';
import {actionCreator} from '../store';
import { connect } from 'react-redux';
import { merge } from 'immutable';


class IntroList extends PureComponent {
  render(){
    const {list,list2,following} = this.props;
    const mulList = merge(list, list2);
    const newList = mulList.toJS();    
    const listPage = [];
    
    console.log(following)
  
    if(newList.length){    
      for(let i = 0; i < newList.length; i++){
        listPage.push(
          <div key = {newList[i].id}>
            <DetailHeader>
            <img src= {require('../../../assets/' + newList[i].imgUrl) } alt="" className = "detailImg"/> 
            <DetailTitle> 
              <h3>{newList[i].title}</h3>
              <p>By: 
                <span>{newList[i].author}</span>
              </p>
              <p>Reading: <span>{newList[i].follow}</span></p>
              <p>{newList[i].content}</p>
                {
                   following ? 
                   <div className = "fllow-icon" onClick = {() => this.props.unFollow()}> Following </div> : 
                   <div className = "fllow-icon" onClick = {() => this.props.followData()}>Follow</div>
                }
                
            </DetailTitle>
          </DetailHeader>
          <DetailContent>
                <h4>Publisher's Summary</h4>
                <p> {newList[i].details1}</p>
          </DetailContent> 
        </div>
        )
      }
    }

    return(
      <div>
        {listPage}
    </div> 
    )
  }

  // handleClickFollow(){
  //   this.setState({
  //     following: true
  //   })
  // }
}



const mapStateProps = (state) => ({
  list: state.getIn(['detail','articleList']),
  list2: state.getIn(['detail','loadMore']),
  following: state.getIn(['detail', 'following'])
})


const mapDispatch = (dispatch) => ({
  getDetail(id){
    dispatch(actionCreator.getDetail(id))
  },
  getLoadMore(id){
    dispatch(actionCreator.getLoadMore(id))
  },
  followData(){
    dispatch(actionCreator.followData())
  },
  unFollow(){
    dispatch(actionCreator.unFollow())
  }
})
export default connect(mapStateProps,mapDispatch)(IntroList)