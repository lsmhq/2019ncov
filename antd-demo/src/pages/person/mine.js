import React, { Component } from 'react'
import BottomNav from '../../components/BottomNav'
import {nav} from '../../js/navJS/nav'
import '../../scss/mine.scss'
import reqPost from '../../js/api/api'
export default class mine extends Component {
    constructor(){
        super();
        this.myRef = React.createRef();
        this.state = {
            items:nav.navConfig,
            inFo:{}
        }
    }

    componentDidMount(){
        if(localStorage.getItem('token')){

        }else{
            this.props.history.push({
                pathname:`/login`
            })
        }
        this.getuserInfo()
    }

    render() {
        return (
            <div className="mine">
                <div className="header">个人中心</div>
                <div className="mine_body">
                <input type="file" ref={this.myRef} style={{display:'none'}} onInput = {this.pushImgs}/>
                    <div className="avator" onClick = {this.upLoadAvator}>
                        <img src={this.state.inFo.avator}/>
                    </div>
                    <div className="userInfo">
                        <div className="userName">{this.state.inFo.name}</div>
                        <div className=""></div>
                    </div>
                </div>
                <div className="cells">
                    <div className="cell" onClick={()=>{this.to('/myGood',0)}}>
                        <img src="/img/mine/good.png"/>
                        <span>我的商品</span>
                    </div>
                    <div className="cell" onClick={()=>{this.to('/chat',1)}}>
                        <img src="/img/mine/put.png"/>
                        <span>发布商品</span>   
                    </div>
                </div>
                <BottomNav history={this.props.history} active={3} items={this.state.items}/>
            </div>
        )
    }
    to = (path,num)=>{
        if(num == 0){
            this.props.history.push(path)
        }else{
            this.props.history.replace(path)
        }
    }
    upLoadAvator = ()=>{
        this.myRef.current.click();
    }
    pushImgs = ()=>{
        let file =this.myRef.current.files[0];
        let reader = new FileReader();
        let imgFile;
        reader.onload=(e) => {
            imgFile = e.target.result;
            let imgs = this.state.inFo;
            reqPost.upLoad({file:imgFile}).then(res=>{
                if(res.data.code == 200){
                    imgs.avator = (res.data.data.url);
                    this.setState({
                        inFo:imgs
                    },()=>{
                        reqPost.setAvator(this.state.inFo).then(res => {
                            console.log(res)
                        })
                    })
                }else{
                    alert('上传失败')
                }
            })
        };
        reader.readAsDataURL(file);
    }
    getuserInfo = ()=>{
        reqPost.userInfo({id:localStorage.getItem('token')}).then(res=>{
            this.setState({
                inFo:res.data.data[0]
            })
        })
    }
}
