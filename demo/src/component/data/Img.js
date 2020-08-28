import React, { Component } from 'react'

export default class Img extends Component {
    render() {
        return (
            <div className='container zoomIn animated'>
                <div className='img'><img src={this.props.src}/></div>
                <div className='title'><span>{this.props.title}</span></div>
            </div>
        )
    }
}
