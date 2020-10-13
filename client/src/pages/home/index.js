import React,{PureComponent} from 'react';
import{connect} from 'react-redux';
import BannerImg from '../../assets/reading.jpg';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {HomeWrapper, 
        HomeLeft,  
        HomeRight,BackTop} from './style';
import { actionCreator } from './store';

//用PureComponent  的时候，必须保证数据都是immutable的，也就是用了immutable.js 的组件才可以
class Home extends PureComponent{
  render(){
    const{showScroll} = this.props;
    return(
      <HomeWrapper>
        <HomeLeft>
          <img src= {BannerImg} alt=""
          className = "banner-img"
          />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Writer></Writer>
          <Recommend></Recommend>
        </HomeRight>
        {showScroll ? 
        <BackTop onClick = {this.handleScrollTop}> 
        <span className ="iconfont">&#xe608;</span>
        </BackTop>
        : null} 
      </HomeWrapper>
    )
  }

  //只改变此组件相关的组件,减少虚拟dom 的比对，提高性能
  // 但如果用这种方法：shouldComponentUpdate(),一个个写太麻烦

  handleScrollTop(){
    window.scrollTo(0,0) //左侧是0，顶部也是0
  }

  //生命周期函数，当页面显示出来后，请求数据
  //请求好了数据再把剩下的内容显示出来


  componentDidMount(){
    this.props.getHomeData();
    this.bindEvents(); //监听scroll的event
  }

  //绑定
  bindEvents(){
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  //解除绑定: 解除的用处就是不会影响其它组件
  componentWillUnmount(){
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
})
//把逻辑组件不要放在UI组件中
const mapDispatch = (dispatch) => ({
   getHomeData(){
    dispatch(actionCreator.getHomeInfo()); // action is a function;
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop > 200){
      dispatch(actionCreator.toggleTopShow(true));
    }else{
      dispatch(actionCreator.toggleTopShow(false));
    }
    //document.documentElement.scrollTop 可以看到屏幕滚动的值
  }
});

//暂时用不到这个store 里的数据，只是改变store里的数据
export default connect(mapState,mapDispatch)(Home);