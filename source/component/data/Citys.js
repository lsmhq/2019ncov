import React, { Component, isValidElement } from 'react';
import './City.css';
import City from './City';
export default class Citys extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        this.fetchData('https://api.tianapi.com/txapi/ncovcity/index?key=285ed712e35d23a3caa2a5e9c62c2574');
    }
    fetchData = (url)=>{
        fetch(url).then(res=>res.json()).then(data=>{
            this.setState({
                data:data.newslist
            })
        })
    }
    render() {
        return (
            <div className='citys-outer'>
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
