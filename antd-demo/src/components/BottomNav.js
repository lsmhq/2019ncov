import React, { Component } from 'react'
import FlexBox from './flex/FlexBox'
import '../css/component/bottomNav.css'
import { Icon, TabBar } from 'antd-mobile'
export default class BottomNav extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render() {
        return (
            <FlexBox
                center={false}
                direction='row'
                className="bottom-nav"
            >
                {
                    this.props.items.map((item,idx)=>{
                        return(
                            <FlexBox
                               center={true}
                               direction="column" 
                               key={item.key}
                               url={item.url}
                               history={this.props.history}
                               className="bottom-nav-item"
                            >
                                <div></div>
                                <span
                                    style={{
                                        color:(idx == this.props.active)?'blue':'gray'
                                    }}
                                >{item.name}</span>
                            </FlexBox>
                        )
                    })
                }
            </FlexBox>
        )
    }
}
