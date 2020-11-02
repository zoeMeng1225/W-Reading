import React, {PureComponent} from 'react';
import{connect} from 'react-redux';
import {ListItem,ListInfo, LoadMore} from '../style';
import {actionCreator} from '../store';
import {Link} from 'react-router-dom';

class List extends PureComponent{
  render(){
    const {list, getMoreList, page} = this.props;
    return(
      <div>
        {
          list.map((item,index) => (
            <Link key = {index} to = {'/detail/' + item.get('id')}>
              <ListItem key = {index}>
                <ListInfo>
                  <h3>{item.get('title')}</h3>
                  <p id = "author">By: <span> {item.get('author')}</span></p>
                  <p>{item.get('content')} </p>
                </ListInfo>
                <img src= {require('../../../assets/' + item.get('imgUrl'))} alt="" className = "listImg"/> 
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick = {() => getMoreList(page)}>Read More</LoadMore>
      </div>
    )
  }
}
//当点击loadmore 的时候，希望能获取ajax新的数据，做异步操作



const mapStateProps = (state) => ({
  // list: state.get('home').get('articleList')
  list: state.getIn(['home','articleList']),
  page: state.getIn(['home','articlePage'])
}) 

//派发一个action
const mapDispatch = (dispatch) => ({
  getMoreList(page){
    dispatch(actionCreator.getMoreList(page))
  }
})

export default connect(mapStateProps, mapDispatch)(List);