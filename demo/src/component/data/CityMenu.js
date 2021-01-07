import React, { Component } from 'react'

export default class CityMenu extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        this.fetchData('https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5')
        this.heightCenter()
    }
    fetchData = (url)=>{
        fetch(url,{mode:'cors'}).then(res=>res.json()).then(data=>{
            // console.log(data);
            this.setState({
                data:JSON.parse(data.data).areaTree
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
        // console.log(this.state.data);
        if(this.state.data.length>0){
            return (
            <div className='cityMenuInner'>
                <ul>
                    {
                        this.state.data.map(val=>{
                            return (<li className='cityName' key={val.name} onClick={(e)=>{this.scrollIntoViewCity(e)}}>{val.name}</li>)
                        })

                    }
                </ul>
            </div>
        )
        }else if(this.state.data.length<=0){
            return(
                <div>正在加载或者服务器正在维护...</div>
            )
        }

    }
}
