/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {
  BackHandler,
  ToastAndroid
} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview'

import React, { Component } from 'react'
let flag = false
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      canGoBack:false
    }
  }
  componentDidMount(){
    let that = this
    BackHandler.addEventListener('hardwareBackPress',()=>{
      console.log(flag)
      if(that.state.canGoBack){
        that.refs['webView'].goBack();
        return true;
      }else{
        if(flag){
          // that.props.navigator.pop();
          return false;
        }else{
          ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);
          flag = true
          setTimeout(()=>{
            flag = false
          },2000)
          return true;
        }
      }
    })
  }
  onNavigationStateChange=(nav)=>{
    // console.log(nav)
    this.setState({
      canGoBack:nav.canGoBack
    })
  }
  toastMessage = (e)=>{
    ToastAndroid.show(e,ToastAndroid.SHORT);
  }
  render() {
    return (
      <AutoHeightWebView
      // originWhitelist={['*']}
      ref="webView"
      style={{flex:1}}
      javaScriptEnabled={true}
      source={{uri: 'http://10.4.72.207:3000'}}
      scalesPageToFit={false}
      onNavigationStateChange={this.onNavigationStateChange}
      domStorageEnabled = {true}
      onMessage = {this.toastMessage}
      dataDetectorTypes = "all"
    />
    )
  }
}
