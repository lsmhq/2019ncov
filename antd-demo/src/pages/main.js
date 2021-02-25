import React, { Component } from 'react'
import BottomNav from '../components/BottomNav'
import {nav} from '../js/navJS/nav'
import '../scss/main.scss'
import FlexBox from '../components/flex/FlexBox'
import Util from '../js/util/util'
import reqPost from '../js/api/api'
export default class main extends Component {
    constructor(){
        super();
        this.state = {
            items: nav.navConfig,
            list:[],
            navList:['价格','销量','热度'],
            height:0,
            page:1,
            activeTab:0,
            loading:true,
            msg:'加载中,请稍等片刻'
        }
    }

    componentDidMount(){
        document.title = '首页'
        this.getData()
    }

    render() {
            return (
                <div className="main">
                    <div className="main-header">
                        <div className="main-header-search" onClick={this.toSearch}>请输入商品关键字</div>
                        <div className="main-header-body">
                        {
                            this.state.navList.map((val,idx)=>{
                                return(
                                    <div
                                        className={`main-header-item ${idx === this.state.activeTab? 'active' : ''}`}
                                        key={idx}
                                        onClick={(e)=>{this.activeTab(e,idx)}}
                                    >
                                        {val}
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div className="main-body" onScroll={(e)=>{this.isBottom(e)}}>
                        {
                            this.state.list.map((val,idx)=>{
                                return(
                                    <FlexBox 
                                        className="main-body-item"
                                        key={idx}
                                        direction="column"
                                    >
                                        <div className="imgContainer">
                                            <img src={val.author?val.author.avatar_url:''}/>
                                        </div>
                                        <p>{val.title}</p>
                                        <p>{val.last_reply_at}</p>
                                    </FlexBox>
                                )
                            })
                        }
                        <div className="main-body-msg">
                            <div className="loading">
                                <div></div>
                                <span>{this.state.msg}</span>
                            </div>
                        </div>
                    </div>
                    <BottomNav history={this.props.history} active={0} items={this.state.items}/>
                </div>
            )
    }
    activeTab = (e,idx)=>{
        this.setState({
            activeTab:idx
        },()=>{
            console.log(this.state.activeTab)
        })
    }
    getData = ()=>{
        this.setState({
            loading:true
        },()=>{
            reqPost.topics({page:this.state.page,limit:10}).then(res=>{
                console.log(res.data)
                this.setState({
                    list:res.data.data
                },()=>{
                    this.setState({
                        loading:false
                    })
                })
            }).catch(e=>{
                window.postMessage(e)
                // alert(e)
            })
        })
    }
    op = ()=>{
        console.log('op')
    }
    toSearch = ()=>{
        this.props.history.push({
            pathname:'/search'
        })
    }
    isBottom = (e)=>{
        if(Util.isBottom(e,this)){
            let list = this.state.list;
            let page = this.state.page + 1;
            this.setState({
                page : page
            },()=>{
                this.setState({
                    loading:true
                },()=>{
                    reqPost.topics({page:this.state.page,limit:10}).then(res=>{
                        console.log(res.data)
                        if(res.data.data.length > 0){
                            this.setState({
                                list:list.concat(res.data.data)
                            },()=>{
                                this.setState({
                                    loading:false
                                })
                            })
                        }else{
                            this.setState({
                                msg:'到底了，没有更多了'
                            })
                        }
 
                    })
                })

            })
        }
    }
}
