import React, { Component } from 'react'
import Container from './NewsContainer'
import './News.css'
export default class News extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        this.fetchData('https://api.tianapi.com/txapi/ncov/index?key=285ed712e35d23a3caa2a5e9c62c2574');
    }
    fetchData = (url)=>{
        fetch(url).then(res=>res.json()).then(data=>{
            this.setState({
                data:data.newslist[0].news
            })
        })
    }
    render() {
        return (
            <div className='news'>
                {
                    this.state.data.map((val, idx)=>{
                        return(
                        <Container
                        key = {idx}
                        pubDateStr={val.pubDateStr}
                        title={val.title}
                        infoSource={val.infoSource}
                        sourceUrl={val.sourceUrl}
                        summary={val.summary}
                        provinceName={val.provinceName}
                        />)
                    })
                }
            </div>
        )
    }
}
