import React, { Component } from 'react'
import './menu.css'
import {NavLink} from 'react-router-dom'
export default class Button extends Component {
    render() {
        return (
            <div className='button'>
                <a href={'#'+this.props.name} className='link' activeClassName='name-select'>{this.props.title}</a>
            </div>
        )
    }
}
