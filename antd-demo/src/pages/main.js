import React, { Component } from 'react'
import BottomNav from '../components/BottomNav'
// import '../css/main/main.css'
import {nav} from '../js/navJS/nav'
import '../scss/main.scss'
// import HeaderNav from '../components/HeaderNav'
import FlexBox from '../components/flex/FlexBox'
export default class main extends Component {
    constructor(){
        super();
        this.state = {
            items: nav.navConfig,
            list:[
                1,2,3,4,5,6,7,8,9
            ]
        }
    }

    componentDidMount(){
        document.title = '首页'
    }

    render() {
        return (
            <div className="main">
                <div className="main-header">
                    <div className="main-header-search" onClick={this.toSearch}></div>
                </div>
                <div className="main-body">
                    {
                        this.state.list.map(val=>{
                            return(
                                <FlexBox 
                                    className="main-body-item"
                                    key={val}
                                >
                                    {val}
                                </FlexBox>
                            )
                        })
                    }
                </div>
                <BottomNav history={this.props.history} active={0} items={this.state.items}/>
            </div>
        )
    }
    op = ()=>{
        console.log('op')
    }
    toSearch = ()=>{
        this.props.history.push({
            pathname:'/search'
        })
    }
}
