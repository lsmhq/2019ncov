import React, { Component } from 'react'
export default class Yaoyan extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        this.fetchData('https://api.tianapi.com/txapi/rumour/index?key=285ed712e35d23a3caa2a5e9c62c2574')
    }
    fetchData = (url)=>{
        fetch(url).then((res)=>res.json()).then(data=>{
            this.setState({
                data:data.newslist
            })
        })
    }
    render() {
        return (
            <div className='yaoyan'>
                <ul>
                    {
                        this.state.data.map(val=>{
                            return(
                            <div className='container-yaoyan fadeIn animated'>
                                <img src={val.imgsrc} width='120px'/>
                                <h3>{val.title}</h3>
                                <span>{val.explain}</span>
                                <p className='time' >{val.date}</p>
                                <p className='author' style={{width:'40%'}}>证 : {val.author.length>=6?val.author.slice(0,6)+'....':val.author}</p>
                            </div>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
