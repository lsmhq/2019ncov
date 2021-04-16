import React, { Component } from 'react'
import reqPost from '../../js/api/api'
import HeaderNav from '../../components/HeaderNav'
import '../../scss/login.scss'
export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            name:'784433957',
            password:'123123',
            msg:'还没有账号?去注册',
            pwdState:true,
            pwdState1:true,
            isRegist:false,
        }
    }
    login = ()=>{
        reqPost.login({name:this.state.name, password:this.state.password}).then(res=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div className='login animated slideInRight faster'>
                <HeaderNav
                    title={this.state.isRegist?'注册':'登录'}
                    op={this.op}
                    history={this.props.history}
                    icon={false}
                />
                <div className="inputGroup">
                    <div className="userName">
                        <img src="/img/login/phone.png"/>
                        <input type="text"  onInput={(e)=>{this.setState({name:e.target.value})}} placeholder="用户名"/>
                    </div>
                    <div className="passWord">
                        <img src="/img/login/password.png"/>
                        <input type={this.state.pwdState?"password":"text"} onInput={(e)=>{this.setState({password:e.target.value})}} placeholder="密码"/>
                        <img onClick={this.showOrhidden} className="showHidden" style={{display:this.state.isRegist?'none':''}} src={`/img/login/${this.state.pwdState?'hidden.png':'show.png'}`}/>
                    </div>
                    <div className="passWord" style={{display:this.state.isRegist?'':'none'}}>
                        <img src="/img/login/password.png"/>
                        <input type={this.state.pwdState?"password":"text"} onInput={(e)=>{this.setState({password1:e.target.value})}} placeholder="确认密码"/>
                        <img onClick={this.showOrhidden1} style={{display:this.state.isRegist?'none':''}} className="showHidden" src={`/img/login/${this.state.pwdState?'hidden.png':'show.png'}`}/>
                    </div>
                </div>
                <div className='loginBtn' onClick={this.login}>{this.state.isRegist?'注册':'登录'}</div>
                <div className='toRegist' onClick={this.regist}>{this.state.isRegist?'返回登录':this.state.msg}</div>
            </div>
        )
    }
    regist = ()=>{
        this.setState({
            isRegist:!this.state.isRegist
        });
    }
    op = ()=>{
        console.log('登录/注册')
    }
    showOrhidden = ()=>{
        this.setState({
            pwdState:!this.state.pwdState
        })
    }
    showOrhidden1 = ()=>{
        this.setState({
            pwdState1:!this.state.pwdState1
        })
    }
    login = ()=>{
        // console.log(this.state)
        // return
        if(!this.state.isRegist){
            reqPost.login({name:this.state.name,password:this.state.password}).then((res)=>{
                console.log(res);
                if(res.data.code == 200){
                    localStorage.setItem('token',res.data.data.userId)
                    this.props.history.go(-1);
                }else{
                    alert(res.data.msg)
                }
            })
        }else{
            if(this.state.password == this.state.password1){
                reqPost.regist({name:this.state.name,password:this.state.password}).then((res)=>{
                    console.log(res);
                    if(res.data.code == 200){
                        this.setState({
                            isRegist:false
                        })
                    }
                })
            }else{
                alert('两次密码不一致')
            }
        }

    }
}
