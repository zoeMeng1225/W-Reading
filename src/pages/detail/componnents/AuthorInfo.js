import React , {PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreator} from '../store';
import {DetailAuthorInfo} from '../style';
import { merge } from 'immutable';


class AuthorInfo extends PureComponent{
  render(){
   const{list,list2,following} = this.props;
   const newList = merge(list,list2);      
   return(
        <div> 
          {
            newList.map((item) => (
              <DetailAuthorInfo key = {item.get('id')}>
                <div className = "authorInfoChildA">
                    <img src= {require('../../../assets/' + item.get('avatar'))} 
                    alt="" 
                    className = "detailAvatar"/>
                    <div className = "authorInfoChild">
                    <h4>{item.get('author')}</h4>
                    <p>Fllower: 
                    <span id = "Fllower-span">{item.get('follow')}</span></p>
                  </div>
                    {
                    following ? 
                    <div className = "fllow-span" onClick = {() => this.props.unFollow()}> Following </div> : 
                    <div className = "fllow-span" onClick = {() => this.props.followData()}>Follow</div>
                  }
                  </div>
                  
            </DetailAuthorInfo>
            ))
          }  
          
        </div>
      )
    }
}

const mapStateProps = (state) => ({
  list: state.getIn(['detail','articleList']),
  list2: state.getIn(['detail','loadMore']),
  following: state.getIn(['detail', 'following'])
})

const mapDispatch = (dispatch) => ({
  followData(){
    dispatch(actionCreator.followData())
  },
  unFollow(){
    dispatch(actionCreator.unFollow())
  }
})


export default connect(mapStateProps,mapDispatch)(AuthorInfo)