import React, { Component } from 'react'

export default class NewsContainer extends Component {
    render() {
        return (
            <div className='news-container animated fadeIn'>
                <div className="news-header">
                    <h3 onClick={this.to}>{this.props.title}</h3>
                    <p>发布于{this.props.pubDateStr}</p>
                </div>
                <div className='news-body'>
                    <p>{this.props.summary}</p>
                </div>
                <div className='position'>{this.props.provinceName}</div>
            </div>
        )
    }
    to = ()=>{
        window.open(this.props.sourceUrl,'_blank')
    }
}
