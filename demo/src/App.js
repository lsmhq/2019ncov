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
        <Body/>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
