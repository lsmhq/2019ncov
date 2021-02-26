import React, { Component } from 'react'
import reqPost from '../../js/api/api'
import HeaderNav from '../../components/HeaderNav'
import Util from '../../js/util/util'
import '../../scss/good.scss'
export default class goodDetail extends Component {
    constructor(){
        super()
        this.state = {
            page:{},
            loading:true
        }
    }
    componentDidMount(){
        // console.log(this.props.location.state)
        this.geData();
    }
    geData = ()=>{
        let { id } = Util.qsParse( window.location.href );
        reqPost.topicsDetail(id).then(res=>{
            console.log(res.data)
            this.setState({
                page:res.data.data
            },()=>{
                this.setState({
                    loading:false
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
                />
                <div className={`good-body`}>
                    <div className="imgContainer">
                        <img src={this.state.page.author.avatar_url}/>
                    </div>
                    <p>{this.state.page.title}</p>
                    <pre className="preContent" dangerouslySetInnerHTML = {{__html:this.state.page.content}}></pre>
                </div>
            </div>
            )
        }
    }
}
