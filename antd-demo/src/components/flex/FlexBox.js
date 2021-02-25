import React, { Component } from 'react';
import '../../css/flex/flexBox.css';
export default class FlexBox extends Component {
    constructor(){
        super();
        this.state = {
            className:''
        }
    }

    componentDidMount(){
        this.setState({
            className:this.style()
        })
    }

    style = ()=>{
        let className = '';
        let {center, direction} = this.props;
        // console.log(center, direction)
        // 居中
        if(center){
            className += ' center';
        }else{
            className += ' speace-around';
        }
        // 方向
        if(direction === 'row'){
            className += ' row';
        }else if(direction === 'column'){
            className += ' column';
        }
        if(this.props.className)
            className += ` ${this.props.className}`
        return className;
    }

    goTo = (e)=>{
        // console.log(this.props.history)
        e.stopPropagation()
        
        if(this.props.url){
            // document.location.hash = this.props.url
            console.log(this.props.url)
            this.props.history.replace({
                pathname:this.props.url
            })
            // this.props.click(this.props.index)
        }else{
            return;
        }
        if(this.props.click){
            this.props.click()
        }
    }
    render() {
        return (
            <div 
                className={`flexBox${this.state.className}`}
                onClick={(e)=>{this.goTo(e)}}
            >
                {this.props.children}
            </div>
        )
    }
}
