import React from 'react';
//导入折线图
import 'echarts/lib/chart/bar';  //折线图是line,饼图改为pie,柱形图改为bar
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
export default class Line extends React.Component{
    constructor(){
        super();
        this.state = {
            option:{}
        }
    }
    componentDidMount(){
        fetch('https://api.tianapi.com/txapi/ncovabroad/index?key=285ed712e35d23a3caa2a5e9c62c2574').then(res=>res.json()).then(data=>{
            console.log(data);
            let option = {
                tooltip:{
                  trigger:'axis',
                },
                xAxis:{
                  data:[],
                  type:'category',
                  axisLabel:{
                      interval:0,
                      formatter: function (value) {
                        //x轴的文字改为竖版显示
                        var str = value.split("");
                        return str.join("\n");
                      }
                  }
                },
                yAxis:{
                  type:'value'
                },
                legend: {
                    data:['现存病例','死亡病例','治愈病例']
                },
                series:[
                  {
                    name:'现存病例',
                    type:'bar',   //这块要定义type类型，柱形图是bar,饼图是pie
                    data:[],
                    itemStyle:{
                        normal:{
                            color:'orange'
                        }
                    }
                  },
                  {
                      name:'死亡病例',
                      type:'bar',
                      data:[],
                      itemStyle:{
                        normal:{
                            color:'gray'
                        }
                    }
                  },
                  {
                      name:'治愈病例',
                      type:'bar',
                      data:[],
                      itemStyle:{
                        normal:{
                            color:'MediumSpringGreen'
                        }
                    }

                  }
                ]
              }
              data.newslist.map(val=>{
                  if(parseInt(val.confirmedCount)>100000){
                    option.xAxis.data.push(val.provinceName);
                    option.series[0].data.push(val.currentConfirmedCount);
                    option.series[1].data.push(val.deadCount);
                    option.series[2].data.push(val.curedCount);
                  }
              })
              this.setState({
                  option:option
              })
        })
    }

  render(){
    return(
      <div style={{height:'100%'}}>
        <ReactEcharts option={this.state.option}  style={{height:'90%',top:'5%'}}/>
      </div>
    )
  }
}