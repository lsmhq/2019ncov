import React, { Component } from 'react'
import './City.css'
export default class City extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <div className='animated fadeIn' >
                            <h1 className='city' id={this.props.provinceShortName}>{this.props.provinceName}</h1>
                            <ul className='head'>
                                <li>确诊</li>
                                <li>{this.props.confirmedCount}</li>
                                <li>现存</li>
                                <li>{this.props.currentConfirmedCount}</li>
                                <li>治愈</li>
                                <li>{this.props.curedCount}</li>
                                <li>死亡</li>
                                <li>{this.props.deadCount}</li>
                            </ul>
                            <div className='container-citys'>
                                <ul className='citys'>
                                    {
                                        this.props.citys.map((val,idx)=>{
                                            return(
                                                <div id='citys' key={idx}>
                                                    <h3>{val.name}</h3>
                                                    <ul>
                                                        <li>确诊:{val.total.confirm}</li>
                                                        <li>现存:{val.total.nowConfirm}</li>
                                                        <li>治愈:{val.total.heal}</li>
                                                        <li>死亡:{val.total.dead}</li>
                                                    </ul>
                                                </div>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
