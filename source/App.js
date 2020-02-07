import React from 'react';
import './App.css';
import Menu from './component/menu/Menu';
import Header from './component/header/Header';
import Body from './component/data/Body';
import {HashRouter as Router} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router >      
        <Header/>
        <Menu/>
        <Body/>
        {console.log('祝疫情早日结束')}
      </Router>
    </div>
  );
}

export default App;
