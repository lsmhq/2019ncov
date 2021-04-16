// import logo from './logo.svg';
import './css/App.css';
import './css/animation.css';
import { HashRouter, Route, Redirect, Switch} from 'react-router-dom';
// import { Provider } from 'react-redux'; // 传递状态
// import store from './js/store/store'; // 状态管理
import ShopCar from './pages/shopCar/shopCar'; // 登录页
import Mine from './pages/person/mine'; // 个人中心
import Main from './pages/main'; // 首页
import Chat from './pages/chat/Chat'; // 聊天
import Search from './pages/search'; // 搜索
import goodDetail from './pages/good/goodDetail'; // 商品详情
import React, { Component } from 'react';// 基础
import Login from './pages/login/Login'; // 登录
import Mygood from './pages/person/Mygood'; // 登录
export default class App extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  render() {
    return (
    // <Provider store={store}>
      <div className="App">
        <HashRouter>
          <Switch>
            {/* 路由配置 */}
            
            {/* 购物车 */}
            <Route path='/shopcar' component={ShopCar}/>

            {/* 个人 */}
            <Route path='/mine' component={Mine}/>

            {/* 首页 */}
            <Route path='/main' component={Main}/>

            {/* 消息 */}
            <Route path='/chat' component={Chat}/>

            {/* 搜索 */}
            <Route path='/search' component={Search}/>

            {/* 商品详情 */}
            <Route path='/goodDetail' component={goodDetail}/>
            
            {/* 登录 */}
            <Route path='/login' component={Login}/>

            {/* 我的商品 */}
            <Route path='/myGood' component={Mygood}/>

            {/*重定向*/}
            <Redirect from={'/*'} exact to='/main' replace/>
          </Switch>
        </HashRouter>
        
      </div>
    // </Provider>
    )
  }
}
