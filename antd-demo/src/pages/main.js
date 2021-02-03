import React, { Component } from 'react'
import BottomNav from '../components/BottomNav'
// import '../css/main/main.css'
import {nav} from '../js/navJS/nav'
import '../scss/main.scss'
export default class main extends Component {
    constructor(){
        super();
        this.state = {
            items: nav.navConfig
        }
    }

    componentDidMount(){
        document.title = '首页'
    }

    render() {
        return (
            <div className="main">
                <BottomNav history={this.props.history} active={0} items={this.state.items}/>
            </div>
        )
    }
}
