import React, { Component } from 'react'
export default class main extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount(){
        document.title = '首页'
    }

    render() {
        return (
            <div onClick={this.goToPage}>
                首页
            </div>
        )
    }

    goToPage = ()=>{
        this.props.history.push({
            pathname:'/login',
            search:'?id=10086'
        })
    }
}
