import React, { Component } from 'react'
import BottomNav from '../../components/BottomNav'
import {nav} from '../../js/navJS/nav'
import HeaderNav from '../../components/HeaderNav'
import '../../scss/chat.scss'
import reqPost from '../../js/api/api'
export default class Chat extends Component {

    constructor(){
        super();
        this.myRef = React.createRef();
        this.state = {
            items:nav.navConfig,
            imgs:[],
            name:'',
            desc:'',
            price:''
        }
    }
    componentDidMount(){
        if(localStorage.getItem('token')){

        }else{
            this.props.history.push({
                pathname:`/login`
            })
        }
    }
    render() {
        return (
            <div className="chat">
                <HeaderNav
                    title={'发布商品'}
                    op={this.op}
                    history={this.props.history}
                    icon={true}
                    node={<div className="pushBtn">发布</div>}
                    back={false}
                />
                <div className="chat_body">
                    <input type="file" ref={this.myRef} style={{display:'none'}} onInput = {this.pushImgs}/>
                    <div className="title">商品图</div>
                    <div className="imgs">
                        {
                            this.state.imgs.map((val, index)=>{
                                return(
                                    <div className="upLoad animated fadeIn faster" key={index} onClick = {this.addImg}>
                                        <img src={val}/>
                                    </div>
                                )
                            })
                        }
                        <div className="upLoad" onClick = {this.addImg}>
                            <img src="/img/chat/add.png"/>
                        </div>
                    </div>
                    <div className="title">商品名称</div>
                    <div className="desc"><input type="text" onInput={(e)=>{this.setValue('name',e)}}/></div>
                    <div className="title">价格</div>
                    <div className="desc"><input type="text" onInput={(e)=>{this.setValue('price',e)}}/></div>
                    <div className="title">简介</div>
                    <div className="textarea"><textarea onInput={(e)=>{this.setValue('desc',e)}}/></div>
                    
                </div>
                <BottomNav history={this.props.history} active={1} items={this.state.items}/>
            </div>
        )
    }
    addImg = ()=>{
        this.myRef.current.click();
    }
    setValue = (num, e)=>{
        if(num == 'name'){
            this.setState({
                name:e.target.value
            })
        }else if(num == 'price'){
            this.setState({
                price:e.target.value
            })
        }else{
            this.setState({
                desc:e.target.value
            })
        }

    }
    op = ()=>{
        reqPost.publish({
            userid:localStorage.getItem('token'),
            imgs:this.state.imgs,
            desc:this.state.desc,
            price:this.state.price,
            name:this.state.name
        }).then(res=>{
            console.log(res)
            if(res.data.code == 200){
                this.props.history.replace('/')
            }else{
                console.log('发布失败')
            }
        });
    }
    pushImgs = ()=>{
        //获取文件
        let file =this.myRef.current.files[0];
        //创建读取文件的对象
        let reader = new FileReader();
        //创建文件读取相关的变量
        let imgFile;
        //为文件读取成功设置事件
        reader.onload=(e) => {
            imgFile = e.target.result;
            console.log(imgFile);
            let imgs = this.state.imgs
            reqPost.upLoad({file:imgFile}).then(res=>{
                if(res.data.code == 200){
                    imgs.push(res.data.data.url);
                    this.setState({
                        imgs:imgs
                    })
                }else{
                    alert('上传失败')
                }
            })
        };
        reader.readAsDataURL(file);
    }
}
