import React, { Component } from 'react'
import HeaderNav from '../components/HeaderNav'
import Util from '../js/util/util'
import reqPost from '../js/api/api'
import FlexBox from '../components/flex/FlexBox'
import '../scss/search.scss';
import { Link } from 'react-router-dom'
export default class search extends Component {
    constructor(){
        super()
        this.state = {
            list:[],
            keyword:'',
            page:1,
            msg:'暂时没有数据',
            loading:false
        }
    }
    render() {
        return (
            <div className='search animated slideInRight faster'>
                <HeaderNav
                    title="商品搜索"
                    op={this.op}
                    history={this.props.history}
                    icon={false}
                    back={true}
                />
                <div className="search-header">
                    <div className="search-header-input">
                        <input 
                            className="input"
                            type="text" 
                            placeholder="请输入商品关键字"
                            onInput={(e)=>{this.setState({
                                keyword:e.target.value
                            })}}/>
                        <span onClick={this.search}>搜索</span>
                    </div>
                </div>
                <div className="search-body" onScroll={(e)=>{this.isBottom(e)}}>
                    {
                        this.state.list.map((val,idx)=>{
                            return(
                                <Link to={"/goodDetail?id=" + val.id} className="goodLink" key={idx}>
                                <FlexBox 
                                    className="main-body-item"
                                    direction="column"
                                    // click = {(e)=>{this.toDetail(e,val)}}
                                >
                                    <div className="imgContainer">
                                        <img src={val.imgs[0]}/>
                                    </div>
                                    <p className="name">{val.name}</p>
                                    <p className="price">￥{val.price}</p>
                                </FlexBox>
                            </Link>
                            )
                        })
                    }
                    <div className="main-body-msg">                           
                        <div className={`loading ${this.state.loading?'':'hidden'}`}>
                            <div></div>
                            {/* {this.state.msg} */}
                        </div>
                        <div className={`${this.state.loading?'hidden':''}`}>{this.state.msg}</div>
                    </div>
                </div>
            </div>
        )
    }
    op = ()=>{
        console.log('搜索')
    }
    search = ()=>{
        this.setState({
            page:1,
            list:[],
            loading:true
        },()=>{
            reqPost.topics({
                page:this.state.page,
                limit:10,
                keyword:this.state.keyword
            }).then(res=>{
                if(res.data.data.length > 0){
                    this.setState({
                        list:res.data.data,
                        loading:false,
                        msg:''
                    })
                }else{
                    this.setState({
                        list:res.data.data,
                        loading:false,
                        msg:'没找到任何内容'
                    })
                }
            })
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
                    reqPost.topics({page:this.state.page,limit:10,keyword:this.state.keyword}).then(res=>{
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
