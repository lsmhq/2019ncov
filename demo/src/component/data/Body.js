import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import All from './All';
import Every from './Yaoyan';
import Citys from './Citys';
import News from './News';
import Echarts from './Echarts';
import China from './China';
export default class Body extends Component {
    render() {
        return (
            <div className='body'>
                <Route path='/all' component={All} exact/>    
                <Route path='/believe' component={Every} exact/> 
                <Route path='/city' component={Citys} exact/>
                <Route path='/news' component={News} exact/>
                <Route path='/echarts' component={Echarts} exact/>
                <Route path='/china' component={China} exact/>
            </div>
        )
    }
}
