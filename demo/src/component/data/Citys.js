import React, { Component, isValidElement } from 'react';
import './City.css';
import City from './City';
import Citymenu from './CityMenu';
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
        this.fetchData('/g2/getOnsInfo?name=disease_h5');
        // this.fetchCount('https://api.tianapi.com/txapi/ncov/index?key=285ed712e35d23a3caa2a5e9c62c2574');
    }
    fetchData = (url)=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(JSON.parse(data.data))
            let dataa = JSON.parse(data.data)
            this.setState({
                data:dataa.areaTree[0].children,
                count:[{count:dataa.chinaTotal.nowConfirm,name:'现存',incr:dataa.chinaAdd.confirm},{count:dataa.chinaTotal.suspect,name:'疑似',incr:dataa.chinaAdd.suspect},{count:dataa.chinaTotal.heal,name:'治愈',incr:dataa.chinaAdd.heal},{count:dataa.chinaTotal.dead,name:'死亡',incr:dataa.chinaAdd.dead}],
            })
        })
    }
    // fetchCount = (url)=>{
    //     fetch(url).then(res=>res.json()).then(data=>{
    //         let val = data.newslist[0].desc;
    //         this.setState({
    //             count:[{count:val.currentConfirmedCount,name:'现存',incr:val.currentConfirmedIncr},{count:val.suspectedCount,name:'疑似',incr:val.suspectedIncr},{count:val.curedCount,name:'治愈',incr:val.curedIncr},{count:val.deadCount,name:'死亡',incr:val.deadIncr}],
    //             add:[{}]
    //         })
    //     })
    // }
    render() {
        return (
            <div className='citys-outer'>
                <div className='cityMenu'>
                    <Citymenu/>
                </div>
                <div className='count fadeIn animated'>
                    <div className='count-header'>
                           <h3>全国情况</h3>
                    </div>
                    <div className='count-body' >
                        <ul>
                            {this.state.count.map((val,index)=>{
                                return(
                                    <div className="count-inner" key={index}>
                                    <li>
                                        {val.name}
                                    </li>
                                    <li style={{fontWeight:'100'}}>
                                        {val.count}
                                    </li>
                                    <li className='incr'>
                                        {val.incr>=0?'+'+val.incr:val.incr}
                                    </li>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                {
                    this.state.data.map((val,idx)=>{
                        return(
                        <City 
                            key = {idx}
                            provinceName={val.name}
                            confirmedCount={val.total.confirm}
                            currentConfirmedCount={val.total.nowConfirm}
                            curedCount={val.total.heal}
                            deadCount={val.total.dead}
                            citys = {val.children}
                            provinceShortName={val.name}
                        />)
                    })
                }
            </div>
        )
    }
}
