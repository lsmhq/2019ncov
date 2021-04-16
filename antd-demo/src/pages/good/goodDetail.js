import React, { Component } from 'react'
import reqPost from '../../js/api/api'
import HeaderNav from '../../components/HeaderNav'
import SlideShow from '../../components/Swet'
import Util from '../../js/util/util'
import '../../scss/good.scss'
export default class goodDetail extends Component {
    constructor(){
        super()
        this.state = {
            page:{},
            loading:true,
            userInfo:{}
        }
    }
    componentDidMount(){
        // console.log(this.props.location.state)
        this.geData();
    }
    geData = ()=>{
        let { id } = Util.qsParse( window.location.href );
        reqPost.detail({id:id}).then(res=>{
            console.log(res.data)
            this.setState({
                page:res.data.data[0]
            },()=>{
                this.setState({
                    loading:false
                })
                console.log(this.state.page.userid)
                reqPost.userInfo({id:this.state.page.userid}).then(res=>{
                    this.setState({
                        userInfo:res.data.data[0]
                    })
                    console.log(res.data)
                })
            })
        })
    }

    render() {
        if(this.state.loading){
            return(
                <div className='good animated slideInRight faster'>
                <HeaderNav
                    title="商品详情"
                    history={this.props.history}
                    icon={false}
                    back={true}
                />
                <div className={`loading`}><div></div></div>
            </div>
            )
        }else{
            return(
                <div className='good animated slideInRight faster'>
                <HeaderNav
                    title={'商品详情'}
                    history={this.props.history}
                    icon={false}
                    back={true}
                />
                <div className={`good-body`}>
                    <div className="imgContainer">
                    <SlideShow>
                        {
                            this.state.page.imgs.map((val, idx)=>{
                                return(
                                    <img className="animated slideInRight faster" src={val} key={idx}/>
                                )
                            })
                        }
                    </SlideShow>
                    </div>
                    <div className = "title">
                        <span className="goodName">商品名：<span>{this.state.page.name}</span></span>
                        <span className="goodPrice">价格:￥{this.state.page.price}</span>
                    </div>
                    <div className="title2">
                        <div className="soler">
                            <img src={this.state.userInfo.avator}/>
                        </div>
                        <div className="name">
                            发布人:
                            <span>{this.state.userInfo.name}</span>
                        </div>
                    </div>
                    <div className="title3">
                        <div className="line"></div>
                        <div className="titleT">商品简介</div>
                    </div>
                    <div className="content" dangerouslySetInnerHTML={{__html:(this.state.page.desc).split(/\n/g).join('<br>')}}></div>
                    <div className="title3">
                        <div className="line"></div>
                        <div className="titleT">商品评论</div>
                    </div>
                    <div className="content" dangerouslySetInnerHTML={{__html:(this.state.page.desc).split(/\n/g).join('<br>')}}></div>
                    <div className="opBtn">
                        <div className="btnOne">加入购物车</div>
                        <div className="btnTwo">立即购买</div>
                    </div>
                </div>
            </div>
            )
        }
    }
}
