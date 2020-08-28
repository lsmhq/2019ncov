import React from 'react';
//导入折线图
import 'echarts/lib/chart/bar';  //折线图是line,饼图改为pie,柱形图改为bar
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';

export default class China extends React.Component {
    constructor(){
        super();
        this.state = {
            option:{}
        }
    }
    getOption =()=> {
        //获取今天日期
        var date = new Date();
        var toDay = date.getFullYear()+'-'+(parseInt(date.getMonth())+1)+'-'+date.getDate();
        fetch('https://api.tianapi.com/txapi/ncov/index?key=285ed712e35d23a3caa2a5e9c62c2574').then(res=>{res.json()}).then(data=>{
            console.log(data);
        })
        let option = {
          title:{
            text:'我国疫情走势月表',
            y:'bottom',
            x:'center'
          },
          tooltip:{
            trigger:'axis',
          },
          legend: {
            data:['感染病例','死亡病例','治愈病例']
        },
          xAxis:{
            data:['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis:{
            type:'value'
          },
          series:[
            {
              name:'感染病例',
              type:'line',   //这块要定义type类型，柱形图是bar,饼图是pie
              data:[1000,2000,1500,3000,2000,1200,800]
            },
            {
                name:'死亡病例',
                type:'line',
                data:[0,10,12,1000,5000,1200,800]
            },
            {
                name:'治愈病例',
                type:'line',
                data:[1000,2000,1500,3000,2000,1200,800]
            }
          ]
        }
       return option
      }
    componentDidMount(){

    }
    render() {
        return (
            <div style={{height:'100%'}}>
                正在更新中
                <ReactEcharts option={this.state.option}  style={{height:'80%',top:'10%'}}/>
            </div>
        )
    }
}
