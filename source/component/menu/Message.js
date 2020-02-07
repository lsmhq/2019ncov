import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './menu.css';
import Button from './Button';
export default class Message extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        this.fetchData('https://api.tianapi.com/txapi/ncovcity/index?key=285ed712e35d23a3caa2a5e9c62c2574')
    }
    fetchData = (url)=>{
        fetch(url).then(res=>res.json()).then(data=>{
            this.setState({
                data:data.newslist
            })
        })
    }
    render() {
        return (
            <div className='message'>
                <Router>                
                    <ul className='nameUl animated'>
                        {
                            this.state.data.map((val,index)=>{
                                return(
                                    <li className='name'><Button title={val.provinceShortName} name={val.provinceShortName}/></li>
                                )
                            })
                        }
                    </ul>
                </Router>
            </div>
        )
    }
}
