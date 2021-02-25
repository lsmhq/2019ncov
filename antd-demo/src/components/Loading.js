import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className='loading'>
                <div></div>
                <span>加载中，请稍等...</span>
            </div>
        )
    }
}
