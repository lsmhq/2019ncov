import React from 'react';
//导入折线图
import 'echarts/lib/chart/bar';  //折线图是line,饼图改为pie,柱形图改为bar
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
import china from 'echarts/map/json/china.json';
import echarts from 'echarts';
echarts.registerMap('china',china);
export default class China extends React.Component {
    constructor(){
        super();
        this.state = {
            option:{}
        }
    };
    
    componentDidMount(){
     
     let option = {
        title : {
            text: '疫情地图',
            subtext: '当日信息(含境外输送)',
            left: 'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: function(params) {
              var res = params.name+'<br/>';
              var myseries = option.series;
              for (var i = 0; i < myseries.length; i++) {
                for(var j=0;j<myseries[i].data.length;j++){
                  if(myseries[i].data[j].name==params.name){
                    res+=myseries[i].name +' : '+myseries[i].data[j].value+'</br>';
                  }
                }
              }
                return res;
            }
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:['现存','死亡','治愈','总数']
        },
        toolbox: {
            show: true,
            orient : 'vertical',
            left: 'right',
            top: 'center',
            feature : {
                mark : {show: true},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                name: '现存',
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[]
            },
            {
                name: '死亡',
                type: 'map',
                mapType: 'china',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[]
            },
            {
                name: '治愈',
                type: 'map',
                mapType: 'china',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[]
            },
            {
              name: '总数',
              type: 'map',
              mapType: 'china',
              roam: false,
              label: {
                  normal: {
                      show: false
                  },
                  emphasis: {
                      show: true
                  }
              },
              data:[]
          }
        ],
        visualMap: {
            min: 0,
            max: 5000,
            left: 'left',
            top: 'bottom',
            text:['严重','轻微'],           // 文本，默认为数值文本
            calculable : false
        },
    };
    fetch('/g2/getOnsInfo?name=disease_h5').then(res=>res.json()).then(data=>{
        let dataa = JSON.parse(data.data); 
      dataa.areaTree[0].children.map(val=>{
        option.series[0].data.push({name:val.name,value:val.total.nowConfirm});
        option.series[1].data.push({name:val.name,value:val.total.dead});
        option.series[2].data.push({name:val.name,value:val.total.heal});
        option.series[3].data.push({name:val.name,value:val.total.confirm});
      })
    //   console.log(option);
      this.setState({option:option});
    //   console.log(this.state.option);
    });
    }
    render() {
        return (
            <div style={{height:'100%'}}>
                <ReactEcharts option={this.state.option} className='fadeIn animated' style={{height:'80%',width:'80%',top:'10%',left:'10%'}}/>
            </div>
        )
    }
}
