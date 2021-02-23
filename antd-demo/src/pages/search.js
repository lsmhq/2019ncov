import React, { Component } from 'react'
import HeaderNav from '../components/HeaderNav'
import '../scss/search.scss';
export default class search extends Component {
    constructor(){
        super()
        this.state = {
            list:[0,1,2,3,4,5,6,7,8,9],
        }
    }
    render() {
        return (
            <div className='search animated slideInRight faster'>
                <HeaderNav
                    title="搜索"
                    op={this.op}
                    history={this.props.history}
                    icon={false}
                />
                <div className="search-body">
                    {
                        this.state.list.map(val=>{
                            return(
                                <div key={val}>{val}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    op = ()=>{
        console.log('搜索')
    }
}
