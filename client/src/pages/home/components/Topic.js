import React,{PureComponent} from 'react';
import {connect } from 'react-redux'; //与store 作连接
import {TopicWrapper,TopicItem} from '../style';



class Topic extends PureComponent{
  render(){
    const {list} = this.props;
    return(
      <TopicWrapper>
        {
          //指的是下面 “mapStateToProps ”的list
          list.map((item) => (
              <TopicItem key = {item.get('id')}>
                <img src= {require('../../../assets/' + item.get('imgUrl'))} alt="" className = 'lableImage1'/>
                {item.get('title')}
              </TopicItem>
          ))
        }
      </TopicWrapper>
    )}
}

//从store 里拿数据
const mapStateToProps = (state) => ({
  // list: state.get('home').get('topicList')
  list: state.getIn(['home','topicList'])
});


export default connect(mapStateToProps, null)(Topic);