import styled from 'styled-components';
import logoPic from '../../statics/logo.png';


export const HeaderWrapper = styled.div`  
    position: relative;
    height: 56px;
    border-bottom: .5px solid #f0f0f0;
    font-family: sans-serif;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    // z-index:2;
    // background: #fff;

    .logoWrap{
      display: flex;
    }
`;

export const Logo = styled.div`
  width: 7em;
  display: block;
  background: url(${logoPic});
  background-size: contain;
  background-repeat: no-repeat;
`;


export const Nav = styled.div`
  width: 100%;
  line-height: 2;
`;


export const NavItem = styled.div`
     font-size: 17px;
     margin: 0 8px;
     color: #425a6c;
    &.left {
      float: left;
      color: #8daf4e;
    }
    
    &.right{
      float: right;
      color: #bb6c1e;
    }

    &.active{
      color: #489fb0;
    }
`;

export const NavSearch = styled.input.attrs({
  placeholder: 'Search'
})`
width: 8em;
border: transparent;
background: transparent;
font-size: 14px;
color: #999;
  &:: placeholder{
    color: #999;
  }
  &.focused{
    width: 12em;
    .iconfont{
    }
  }
  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 12em;
  }

  &.slide-exit{
    transition: all .2s ease-out
  }

  &.slide-exit-active{
    width: 8em;
  }
`;


export const SearchWrapper = styled.div`
  float: left;
  background: #f1f1f1;
  position: relative;
  border-radius: 10px;
  padding: 0 .5em;
 

  .zoom{cd
    position: absolute;
    right: 2px;
    top: 7px;
    width: 2em;
    height: 2em;
    border-radius: 100%;
    text-align: center;
    font-size: .7em;
    color: #999;
    &.focused{
      font-size: .7em
      color: #fff
    }
  }
`;



export const Button = styled.div`
  line-height: 1.8;
  float: right;
  margin: 0 8px;
  height: 100%;
  padding: .2em 10px;
  border: 1px #bb6c1e solid ;
  box-sizing: border-box;
  border-radius: 10px; 
  font-size: 14px;
  &.reg{
    background: #bb6c1e;
    color: #fff;
  }
  &.write{
    color:#bb6c1e;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 1.9em;
  width: 9em;
  background: #fff;
  padding: .5em;
  box-shadow: 0 0 8px rgba(189,188,188,.8);
  border-radius: 8px; 
`;

export const SearchInfoTitle = styled.div`
    font-size: .6em;
    color: #696969;
    display: flex;
    box-sizing: content-box;
    justify-content: space-between;
    .spin{
      font-size: .8em;
      margin-right: 3px;
      transition: all .15s ease-in;
      transform:rotate(0deg);
      display: block;
      transform-origin: center center;
      line-height: 2.4;

    }
`;

export const SearchInfoUpdate = styled.div`
    font-weight: 200;
    display: flex;
    line-height: 2;
    cursor:pointer;
`;

export const SearchInfoItem = styled.a`
    display: block;
    font-size: .5em;
    border: 0.5px solid #ddd;
    border-radius:5px;
    color: #787878;
    float:left;
    padding:0 2px;
    margin-right:5px;
    margin-top: 8px;
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`
