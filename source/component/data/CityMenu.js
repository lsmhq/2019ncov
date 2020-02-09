import React, { Component } from 'react'

export default class CityMenu extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        this.fetchData('https://api.tianapi.com/txapi/ncovcity/index?key=285ed712e35d23a3caa2a5e9c62c2574')
        this.heightCenter()
    }
    fetchData = (url)=>{
        fetch(url).then(res=>res.json()).then(data=>{
            this.setState({
                data:data.newslist
            })
        })
    }
    scrollIntoViewCity = (e)=>{
        document.getElementById(e.target.innerHTML).scrollIntoView();
        let list = document.getElementsByClassName('cityName');
        for(let i = 0; i<list.length;i++){
            list[i].classList.remove('active');
        }
        e.target.className = 'cityName active'
    }
    heightCenter = ()=>{
        let list = document.getElementsByClassName('cityName');
        for(let i = 0 ;i < list.length ; i++){
            list[i].getElementsByClassName.height = list[i].clientHeight;
        };
    }
    render() {
        return (
            <div className='cityMenuInner'>
                <ul>
                    {
                        this.state.data.map(val=>{
                           return (<li className='cityName' key={val.provinceShortName} onClick={(e)=>{this.scrollIntoViewCity(e)}}>{val.provinceShortName}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
