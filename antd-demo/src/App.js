// import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Login from './pages/login/login'; // 登录页
import Mine from './pages/person/mine'; // 个人中心
import Main from './pages/main'; // 首页
import Chat from './pages/chat/Chat'; // 聊天
function App() {
  return (
    <div className="App">
      <HashRouter>
        
        {/* 路由配置 */}

        {/* 登录 */}
        <Route path='/login' component={Login}/>

        {/* 个人 */}
        <Route path='/mine' component={Mine}/>

        {/* 首页 */}
        <Route path='/main' component={Main}/>

        {/* 聊天 */}
        <Route path='/chat' component={Chat}/>

      </HashRouter>
    </div>
  );
}

export default App;
