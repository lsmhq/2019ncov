import React, { Component } from 'react'
import '../scss/headerNav.scss'
import FlexBox from './flex/FlexBox'
export default class HeaderNav extends Component {
    render() {
        return (
            <FlexBox
                center={true}
                direction='row'
                className="header-nav"
            >
                <div className="header-back" onClick={this.back}><img src="/img/headerNav/back.png" alt="back"/></div>
                <div className="header-title">{this.props.title}</div>
                <div onClick={this.op} style={{opacity:this.props.icon?1:0}}>图标</div>
            </FlexBox>
        )
    }

    back = ()=>{
        console.log('回退')
        this.props.history.go(-1);
    }
    op = ()=>{
        this.props.op()
    }
}
