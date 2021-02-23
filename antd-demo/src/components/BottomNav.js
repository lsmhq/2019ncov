import React, { Component } from 'react'
import FlexBox from './flex/FlexBox'
import '../css/component/bottomNav.css'
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
                                <div><img src={idx === this.props.active ? `/img/nav-ac/nav-ac${idx}.png` : `/img/nav/nav${idx}.png`}/></div>
                                <span
                                    style={{
                                        color:(idx == this.props.active)?'#fa7202':'gray'
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
