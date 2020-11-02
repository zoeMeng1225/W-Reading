import React from 'react';
import Loadable from 'react-loadable';


//这样做的目的是把detail component 变成异步组件，满足异步加载的需求，不会在浏览首页的时候同时加载detail page



//异步加载
// import 异步加载的新语法
const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
    return(
       <div>loading</div>)
  }
});

export default () => <LoadableComponent/>;
