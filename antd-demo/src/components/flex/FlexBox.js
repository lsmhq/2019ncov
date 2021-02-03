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
        // 居中
        if(center){
            className += 'center';
        }else{
            className += 'speace-around';
        }
        // 方向
        if(direction == 'row'){
            className += 'row';
        }else if(direction == 'cloumn'){
            className += 'cloumn';
        }else{

        }
    }

    render() {
        return (
            <div className="flexBox">
                {this.props.children}
            </div>
        )
    }
}
