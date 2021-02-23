import React, { Component } from 'react'
import BottomNav from '../../components/BottomNav'
import {nav} from '../../js/navJS/nav'
export default class mine extends Component {

    constructor(){
        super();
        this.state = {
            items:nav.navConfig
        }
    }


    render() {
        return (
            <div>
                <div>个人中心</div>
                <BottomNav history={this.props.history} active={3} items={this.state.items}/>
            </div>
        )
    }
}
