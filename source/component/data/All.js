import React, { Component } from 'react';
import './body.css';
import Img from './Img';
export default class All extends Component {
    constructor(){
        super();
        this.state = {
            data:{dailyPics:[]}
        }
    }
    componentDidMount(){
        this.fetchData('https://api.tianapi.com/txapi/ncov/index?key=285ed712e35d23a3caa2a5e9c62c2574');

    }
    fetchData = (url)=>{
        fetch(url).then(res=>res.json()).then(data=>{
            // console.log(data.newslist);
            this.setState({
                data:data.newslist[0].desc
            })
        })
    }
    render() {
        return (
            <div className='all'>
                <div className='container-all'><Img src={this.state.data.imgUrl} title='全国情况图'/></div>
                {
                    this.state.data.dailyPics.map(val=>{
                        return(<div className='container-all'><Img src={val}/></div>)
                    })
                }
            </div>
        )
    }
}
