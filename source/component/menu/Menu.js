import React, { Component } from 'react'
import './menu.css'
import {NavLink} from 'react-router-dom';
import Message from './Message';
import '../../animate.css';
export default class Menu extends Component {
    render() {
        return (
            <div className='menu'>            
                    <ul className='nameUl-outer'>
                    {/* onClick={this.slideOutUp} */}
                        <li className='name-outer'><NavLink to='/all' activeClassName='active-outer' >全国疫情</NavLink></li>
                        <li className='name-outer'><NavLink to='/believe' activeClassName='active-outer'>谣言鉴别</NavLink></li>
                        <li className='name-outer'>
                            <NavLink to='/city' activeClassName='active-outer'>省份详情</NavLink>
                            <Message/>
                        </li>
                        <li className='name-outer'><NavLink to='/news' activeClassName='active-outer'>实时播报</NavLink></li>
                    </ul>
            </div>
        )
    }
    slideInDown = ()=>{
        let node = document.getElementsByClassName('nameUl')[0];
        let str = node.className.split(' ');
        if(str[2]){
            node.classList.remove('slideOutUp');
            node.classList.add('slideInDown');
            node.style.display = 'block';
        }else{
            node.classList.add('slideInDown');
            node.style.display = 'block';
        }

    }
    slideOutUp = ()=>{
        let node = document.getElementsByClassName('nameUl')[0];
        let str = node.className.split(' ');
        node.classList.remove('slideInDown');
        node.classList.add('slideOutUp');
        setTimeout(()=>{node.style.display = 'none';},1000)
        
    }
}
