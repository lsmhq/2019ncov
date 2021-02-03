// import logo from './logo.svg';
import './css/App.css';
import { HashRouter, Route, Redirect, Switch} from 'react-router-dom';
// import { Provider } from 'react-redux'; // 传递状态
// import store from './js/store/store'; // 状态管理
import ShopCar from './pages/shopCar/shopCar'; // 登录页
import Mine from './pages/person/mine'; // 个人中心
import Main from './pages/main'; // 首页
import Chat from './pages/chat/Chat'; // 聊天
import  BottomNav from './components/BottomNav'// 底部导航
import React, { Component } from 'react'

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
            
            {/* 登录 */}
            <Route path='/shopcar' component={ShopCar}/>

            {/* 个人 */}
            <Route path='/mine' component={Mine}/>

            {/* 首页 */}
            <Route path='/main' component={Main}/>

            {/* 聊天 */}
            <Route path='/chat' component={Chat}/>

            {/*重定向*/}
            <Redirect from={'/'} exact to='/main' replace/>
          </Switch>
        </HashRouter>
        
      </div>
    // </Provider>
    )
  }
}
