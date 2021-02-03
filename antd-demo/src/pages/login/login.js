import React, { Component } from 'react'

export default class login extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        console.log(this.props.location.search)
    }

    render() {
        return (
            <div>
                login
            </div>
        )
    }
}
