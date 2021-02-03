import React, { Component } from 'react'
import FlexBox from './flex/FlexBox'
export default class BottomNav extends Component {
    constructor(){
        super()
    }

    render() {
        return (
            <FlexBox
                center={false}
                direction='row'
            >
                {
                    this.props.items.map((item,idx)=>{
                        return(
                            <FlexBox
                               center={true}
                               direction="column" 
                            >
                                <img src={item.url}/>
                                <span>{item.name}</span>
                            </FlexBox>
                        )
                    })
                }
            </FlexBox>
        )
    }
}
