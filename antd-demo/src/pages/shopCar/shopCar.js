import React, { Component } from 'react'
import BottomNav from '../../components/BottomNav'
import {nav} from '../../js/navJS/nav'
export default class login extends Component {
    constructor(){
        super();
        this.state = {
            items:nav.navConfig
        }
    }

    render() {
        return (
            <div>
                <div>购物车</div>
                <BottomNav history={this.props.history} active={2} items={this.state.items}/>
            </div>
        )
    }
}
