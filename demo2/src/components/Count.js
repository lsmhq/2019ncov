import React, { Component } from 'react';
import './Count.css';
export default class Count extends Component {
    render() {
        return (
            <div 
                className='count'
                style={this.getStyle()}
            >
                <span className='count_title1' style={{color:this.props.config.title1_color}}>{this.props.config.title1}</span>
                <span className='count_title2'>
                    <span style={{color:this.props.config.title2_color}}>{this.props.config.title2}</span>
                    <span style={{color:this.props.config.count1_color}}>{this.props.config.count1}</span>
                </span>
                <span className='count_title3'>
                    <span style={{color:this.props.config.title3_color}}>{this.props.config.title3}</span>
                    <span style={{color:this.props.config.count2>0?'red':'green'}}>{this.props.config.count2}</span>
                </span>
            </div>
        )
    }
    getStyle(){
        return this.props.style;
    }
}
