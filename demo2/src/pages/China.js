import React, { Component } from 'react'
import api from '../js/api';
import Count from '../components/Count';
import Card from "../components/Card";
import Loading from '../components/Loading';
export default class China extends Component {
    constructor(){
        super()
        this.state = {
          areaTree:[],// 省市
          upDateTime:'',// 最后更新时间
          chinaTotal:{},// 中国总数
          chinaAdd:{}, // 中国新增
          dicData:{
            nowConfirm: '现存确诊',
            importedCase: '境外累计输入',
            noInfect: '无症状感染者',
            confirm: '累计确诊',
            heal: '累计治愈',
            // nowSevere: '',
            // suspect: '疑似病例',
            dead: '累计死亡',
          },
          dicColor:{
            confirm: '#ffccbc',
            heal: '#dcedc8',
            importedCase: '#fbe9e7',
            noInfect: '#d7ccc8',
            nowConfirm: '#ffe0b2',
            // nowSevere: '',
            // suspect: '#FFFFFF',
            dead: '#9e9e9e',
          },
          title1_color:{
            confirm: '#f4511e',
            heal: '#00c853',
            importedCase: '#f4511e',
            noInfect: '#6d4c41',
            nowConfirm: '#dd2c00',
            // nowSevere: '',
            // suspect: 'black',
            dead: '#fafafa',
          },
          title2_color:{
            confirm: '#f4511e',
            heal: '#00c853',
            importedCase: '#ff5722',
            noInfect: '#795548',
            nowConfirm: '#ff3d00',
            // nowSevere: '',
            // suspect: 'black',
            dead: '#DADADA',
          },count1_color:{
            confirm: '#f4511e',
            heal: '#1b5e20',
            importedCase: '#ff5722',
            noInfect: '#795548',
            nowConfirm: '#ff3d00',
            // nowSevere: '',
            // suspect: 'black',
            dead: '#DADADA',
          },title3_color:{
            confirm: '#f4511e',
            heal: '#00c853',
            importedCase: '#ff7043',
            noInfect: '#795548',
            nowConfirm: '#ff6e40',
            // nowSevere: '',
            // suspect: 'black',
            dead: '#DADADA',
          },
          loading:true,
        }
      }

      componentDidMount(){
        document.title = '中国疫情';
        this.fetchData();
      }

      fetchData(){
        api.getData({name:'disease_h5'}).then(res=>{
          let data = JSON.parse(res.data.data);
          console.log(data)
          this.setState({
            areaTree:data.areaTree[0].children,
            upDateTime:data.lastUpdateTime,
            chinaTotal:data.chinaTotal,
            chinaAdd:data.chinaAdd,
            loading:false
          });
        }).catch(e=>console.log(e))
      }

    render() {
      if(this.state.loading){
        return(
          <Loading/>
        )
      }else{
        return (
          <div className='count_container'>
            <div className='header'>
            {
              Object.keys(this.state.dicData).map((key,idx)=>{
                  return(
                    <Count
                        key={key}
                        config={{
                            title1:this.state.dicData[key],
                            title2:'当日数量',
                            title3:'较昨日',
                            count1:this.state.chinaTotal[key],
                            count2:this.state.chinaAdd[key]>0?'+'+this.state.chinaAdd[key]:this.state.chinaAdd[key],
                            title2_color:this.state.title2_color[key],
                            title1_color:this.state.title1_color[key],
                            count1_color:this.state.count1_color[key],
                            title3_color:this.state.title3_color[key],
                        }}
                        style = {{backgroundColor:this.state.dicColor[key]}}
                    />
                  )
              })
            }
            </div>
            <div className='body'>
              {
                this.state.areaTree.map((val,idx)=>{
                  return (
                    <Card
                      value = {val}
                      key = {idx}
                    />
                  )
                })
              }
            </div>
          </div>
        )
      }
    }
}
