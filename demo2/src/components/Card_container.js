import React, { Component } from 'react'

export default class Card_container extends Component {
    render() {
        return (
            <div className='card_container' style={{backgroundColor:this.props.color}}>
                <span style={{color:this.props.titleColor}}>{this.props.title}</span>
                <span style={{color:this.props.countColor}}>{this.props.count}</span>
            </div>
        )
    }
}
