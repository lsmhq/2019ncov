import React, { Component } from 'react'
import BottomNav from '../../components/BottomNav'
import {nav} from '../../js/navJS/nav'
import HeaderNav from '../../components/HeaderNav'
export default class login extends Component {
    constructor(){
        super();
        this.state = {
            items:nav.navConfig
        }
    }
    componentDidMount(){
        if(localStorage.getItem('token')){

        }else{
            this.props.history.push({
                pathname:`/login`
            })
        }
    }
    render() {
        return (
            <div>
                <HeaderNav
                    title={'购物车'}
                    op={this.op}
                    history={this.props.history}
                    icon={false}
                />
                <BottomNav history={this.props.history} active={2} items={this.state.items}/>
            </div>
        )
    }
}
