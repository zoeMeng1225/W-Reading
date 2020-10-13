import React, {Component,Fragment} from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Globalstyle} from './style';
import {GlobalIcon} from './statics/iconfont/iconfont';
import Header from './common/header';
import Home from '../src/pages/home';
import Detail from '../src/pages/detail/loadable';
import Login from '../src/pages/login';
import Write from '../src/pages/write';
import Register from '../src/pages/register';
import store from './store';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {apiResponse: ""};
  }

  callAPI(){
    fetch("http://localhost:9000")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
      .catch(err => err); 
  }

  componentDidMount(){
    this.callAPI();
  }


  render(){
    return (
        <Fragment>
          <Provider store = {store}> 
            <Globalstyle />
            {/* 把组件提供给内部所有的组件 */}
              <BrowserRouter>
                <Header/>
                <Route path = '/' exact component = {Home}></Route> 
                <Route path = '/login' exact component = {Login}></Route>
                <Route path = '/register' exact component = {Register}></Route>
                <Route path = '/write' exact component = {Write}></Route>  
                <Route path = '/detail/:id' exact component = {Detail}></Route>
              </BrowserRouter>
            <GlobalIcon/>
          </Provider>
        </Fragment>
    );
  }
}

export default App;