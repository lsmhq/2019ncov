import React from 'react';
import './App.css';
import Menu from './component/menu/Menu';
import Header from './component/header/Header';
import Body from './component/data/Body';
import {HashRouter as Router} from 'react-router-dom';
import Footer from './component/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Router >      
        <Header/>
        <Menu/>
        <Body/>{console.log('************************\n祝疫情早日结束\n祝工作在一线的白衣天使身体健康\n再也不要有人牺牲\n*****************************')}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
