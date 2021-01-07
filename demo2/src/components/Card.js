import React, { Component } from 'react';
import './Count.css';
import Container from './Card_container';
export default class Card extends Component {
    constructor(){
        super()
        this.state={
            dic:{
                nowConfirm:'现存病例',
                wzz_add:'当日新增',
                dead:'死亡病例'
            },
            color:{
                nowConfirm:'#ffccbc',
                wzz_add:'#BDBDBD',
                dead:'#9e9e9e'
            },
            height:'0px',
            deg:'0deg'
        }
    }
    render() {
        return (
            <div className='card'>
                <div className='card_name' style={{color:this.props.value.name=='河北'?'red':''}}>{this.props.value.name}</div>
                <div className='card_count'>
                    {
                        Object.keys(this.state.dic).map((keys,idx)=>{
                            return(
                                <Container
                                    key={idx}
                                    title={this.state.dic[keys]}
                                    count={keys==='wzz_add'?(this.props.value.today.confirm-this.props.value.today.confirmCuts):this.props.value.total[keys]}
                                    color={this.state.color[keys]}
                                    titleColor={keys === 'dead'?'white':(keys==='wzz_add'?(this.props.value.today[keys]>0?'red':'green'):'#dd2c00')}
                                    countColor={keys === 'dead'?'white':(keys==='wzz_add'?(this.props.value.today[keys]>0?'red':'green'):'#dd2c00')}
                                />
                            )
                        })
                    }
                </div>
                <div className='card_more' onClick={(e)=>{
                    if(this.state.height === '300px'){
                        this.setState({
                            height:'0px',
                            deg:'0deg'
                        })
                        return
                    }
                    this.setState({
                        height:`${300}px`,
                        deg:'90deg'
                    })
                }}>
                    <img src='/more.png' style={{transform:`rotate(${this.state.deg})`}}/>
                </div>
                <div className='more' style={{height:this.state.height}}>
                    {
                        this.props.value.children.map((val,idx)=>{
                            return(
                                <div className='more_card' key={idx}>
                                    <div className='more_card_name'>{`${val.name}(${val.total.grade?val.total.grade:'----'})`}</div>
                                    <div className='more_card_count'>
                                        {
                                            Object.keys(this.state.dic).map((keys,idx)=>{
                                                return(
                                                    <div className='more_card_count_count' key={idx}>
                                                        <span>{this.state.dic[keys]}</span>
                                                        <span>{keys==='wzz_add'?val.today.confirm - val.today.confirmCuts:val.total[keys]}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
