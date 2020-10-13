import React,{Component} from 'react';// 如果JSX 想要正常编译，必须用这个
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreator} from './store';
import {actionCreator as actionCreatorLogin} from '../../pages/login/store';
import {HeaderWrapper,
        Logo, 
        Nav, 
        SearchInfo,
        SearchInfoTitle,
        SearchInfoUpdate,
        SearchInfoItem,
        SearchInfoList,
        NavItem,
        NavSearch,
        Button,
        SearchWrapper} from './style';
        


class Header extends Component{
  getSearchInfoList(){
    //结构赋值语法
    const {mouseIn,focused, list, page, totalPage, handleMouseEnter,handleMouseLeave, handleUpdateContent} = this.props;
    //list 是immutable
    const pageList = [];
    const newList = list.toJS(); //把immutable 数组转成一个普通的js数组

    //ajax请求，如果newList 里面有东西的时候，newList才能作为key 值来使用 刚开始如果不做循环，那么Key 值就不会有任何的问题
    if(newList.length){
      for(let i = (page - 1) * 10; i < page * 10; i++){
        pageList.push(
            <SearchInfoItem key = {newList[i]}> {newList[i]}
          </SearchInfoItem>
        )}
      }
    //在info 框里点击的时候也一样会显示
    if(focused || mouseIn){
      return(
        <SearchInfo 
        onMouseEnter = {handleMouseEnter}
        onMouseLeave = {handleMouseLeave}
        >
        <SearchInfoTitle>
          Hot Search
          <SearchInfoUpdate 
          onClick = {() => handleUpdateContent(page,totalPage, this.spinIcon)}> 
          <span ref = {(icon) => {this.spinIcon = icon}} 
          className ="iconfont spin">&#xe65e;</span>Update
          </SearchInfoUpdate>
        </SearchInfoTitle>
        <SearchInfoList>
          {/* {
          list.map((item) => {
            return <SearchInfoItem key = {item}> {item}
            </SearchInfoItem>
          })} */}
          {pageList}
        </SearchInfoList>
      </SearchInfo>
      )}else{
      return null;
    }
  }

  render(){
    const {focused, handleInputFocus,handleInputBlur,list,login,logout} = this.props 
    return(
          <HeaderWrapper>
          <Link to = "/" className = "logoWrap">
            <Logo/>
          </Link>
          <Nav>
            <NavItem className = 'left active'>Home</NavItem>
            <NavItem className = 'left'>Download App</NavItem>
          
            <SearchWrapper>
              <CSSTransition
                  //控制出场动画
                  in = {focused}
                  //动画时长
                  timeout = {200}
                  classNames = "slide"
                >
                <NavSearch 
                className = {focused ? 'focused' : ''}
                onFocus = {() => handleInputFocus(list)}
                onBlur = {handleInputBlur}> 
                </NavSearch>
              </CSSTransition>
                <span className = {focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
                    &#xe60c;</span>
              {this.getSearchInfoList()}
            </SearchWrapper>

            <Link to = '/write'>
            <Button className = 'reg'>
              <span className ="iconfont">&#xe678;</span>
              Add Article
            </Button>
            </Link>
            <Link to ="/register">
              <Button className = 'write'>Sign up</Button>
            </Link>

            {
              login ? 
              <NavItem onClick = {logout} className = 'right'>Log out</NavItem> : 
              <Link to = "/login"><NavItem className = 'right'>Log in</NavItem></Link>
            }

            
            <NavItem className = 'right'>
                <span className ="iconfont">&#xe771;</span>
            </NavItem>
          </Nav>
      </HeaderWrapper>
   )
  }
}

// Header 为statelss（无状态） 组件
//好处：提高性能


// 这个组件和store做连接的时候，store里的数据如何隐射到Props中去
//state 指的是 store 里的所有数据
//指的是仓库里的focused
//加了header是因为放在了header里了。
// getIn: 取header下面的focused 这个值
// focused:state.get('header').get('focused') 
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list:state.getIn(['header','list']),
    page:state.getIn(['header','page']),
    totalPage:state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

//组件在和store做连接的时候，当组件想要改变store里的内容，就要调用store里的方法 “mapDispathToProps” 写在这个方法里
// dispatch : store.dispatch
const mapDispathToProps = (dispatch) => {
  return{
    handleInputFocus(list){
      (list.size === 0) && dispatch(actionCreator.getList());
      //
      // const action = actionCreator.searchFocus();
      //size from console 上的list的属性
      // console.log(list)
      // if(list.size === 0){
      //   dispathch(actionCreator.getList());
      // }
      dispatch(actionCreator.searchFocus());  
    },
    handleInputBlur(){
      // const action = actionCreator.searchBlur()
      dispatch(actionCreator.searchBlur())
    },
    handleMouseEnter(){
      dispatch(actionCreator.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreator.mouseLeave())
    },
    handleUpdateContent(page, totalPage, spin){
      let oriDeg = spin.style.transform.replace(/[^0-9]/ig, '');
      //如果这里面的内容都不是0-9的数字，那就替换成空
      // console.log(oriDeg);
      if(oriDeg){
        oriDeg = parseInt(oriDeg, 10); // 以10进制的方式转换为一个正整数 
      }else{
        oriDeg = 0; //第一次点击
      }
      spin.style.transform  = 'rotate(' + (oriDeg + 360) + 'deg)';
      // spin.style.transform = 'rotate(' + (oriDeg + 360) + 'deg)';

      if(page < totalPage){
        dispatch(actionCreator.updateContent(page + 1))
      }else{ 
        // 如果在最后一页面上了，再回到第一页面 if(page == totalPage)
        dispatch(actionCreator.updateContent(1))
      } 
      // console.log(page,totalPage)
    },
    logout(){
      dispatch(actionCreatorLogin.logout())
    }
  }
}


export default connect(mapStateToProps, mapDispathToProps ) (Header);