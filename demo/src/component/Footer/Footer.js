import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div style={{width:'100%',height:'5%',float:"left",textAlign:'center',backgroundColor:"rgb(50,50,50)"}}>
                <a href="http://beian.miit.gov.cn/" target="_blank" style={{fontSize:'20px',color:'gray'}}>冀ICP备19027994号-1</a>
            </div>
        )
    }
}
