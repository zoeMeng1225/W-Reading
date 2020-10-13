import React , {PureComponent} from 'react';
import {connect} from 'react-redux';
import {WriterWrapper,WriterUp,WriterDown} from '../style.js';
import { actionCreator } from '../store/index.js';


class Writer extends PureComponent{
  render(){  
    const {list,page,handleChangeAuthor,totalPage} = this.props; 
    const pageList = [];
    const newList = list.toJS();
    // console.log(typeof(newList))
    if(newList.length){
      for(let i = (page - 1) * 6; i < page * 6; i++){
        pageList.push(
          <WriterDown key = {newList[i].id}>
            <img src= {require('../../../assets/' + newList[i].imgUrl)} alt=""/>
            <div className= "writerInfo">
            <h4>{newList[i].name}</h4>
           <p>{newList[i].bookNum} books | {newList[i].likes} likes</p>
          </div>
          <div className = "follow">
            <span className ="iconfont">&#xe688;</span>Follow
         </div>
          </WriterDown>
        )
      }
    }
    
    return(
        <WriterWrapper>
          <WriterUp> 
            <h3>Pupular Author</h3>
            <div onClick = {() => handleChangeAuthor(page,totalPage)}>
              <span className ="iconfont auUpdata">&#xe65e;</span>Update
            </div>
          </WriterUp>
            {pageList}
        </WriterWrapper>
    )
  }
}

const mapStateProps = (state) =>({
  list: state.getIn(['home', 'writerList']),
  page:state.getIn(['home','page']),
  totalPage:state.getIn(['home','totalPage']),
})

const mapDispatch = (dispatch) => ({
  getHomeInfo(){
    dispatch(actionCreator.getHomeInfo())
  },
  handleChangeAuthor(page,totalPage){
    if(page < totalPage){
      dispatch(actionCreator.changePageAuthor(page + 1))
    }else{
      dispatch(actionCreator.changePageAuthor(1))
    }  
  }
})


export default connect(mapStateProps,mapDispatch)(Writer);