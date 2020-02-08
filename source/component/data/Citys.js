import React, { Component, isValidElement } from 'react';
import './City.css';
import City from './City';
export default class Citys extends Component {
    constructor(){
        super()
        this.state = {
            data:[],
            count:[],
            add:[]
        }
    }
    componentDidMount(){
        this.fetchData('https://api.tianapi.com/txapi/ncovcity/index?key=285ed712e35d23a3caa2a5e9c62c2574');
        this.fetchCount('https://api.tianapi.com/txapi/ncov/index?key=285ed712e35d23a3caa2a5e9c62c2574');
    }
    fetchData = (url)=>{
        fetch(url).then(res=>res.json()).then(data=>{
            this.setState({
                data:data.newslist
            })
        })
    }
    fetchCount = (url)=>{
        fetch(url).then(res=>res.json()).then(data=>{
            let val = data.newslist[0].desc;
            this.setState({
                count:[{count:val.confirmedCount,name:'确诊'},{count:val.suspectedCount,name:'疑似'},{count:val.curedCount,name:'治愈'},{count:val.deadCount,name:'死亡'}],
                add:[{}]
            })
        })
    }
    render() {
        return (
            <div className='citys-outer'>
                <div className='count fadeIn animated'>
                    <div className='count-header'>
                           <h3>全国情况</h3>
                    </div>
                    <div className='count-body' >
                        <ul>
                            {this.state.count.map(val=>{
                                return(
                                    <div className="count-inner">
                                    <li>
                                        {val.name}
                                    </li>
                                    <li style={{fontWeight:'100'}}>
                                        {val.count}
                                    </li>
                                    </div>

                                )
                            })}
                        </ul>
                    </div>
                </div>
                {
                    this.state.data.map(val=>{
                        return(
                        <City 
                        provinceName={val.provinceName}
                        confirmedCount={val.confirmedCount}
                        suspectedCount={val.suspectedCount}
                        curedCount={val.curedCount}
                        deadCount={val.deadCount}
                        citys = {val.cities}
                        provinceShortName={val.provinceShortName}
                        />)
                    })
                }
            </div>
        )
    }
}
