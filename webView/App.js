/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {
  BackHandler,
  ToastAndroid,
  View,
  StatusBar,
  StyleSheet
} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview'

import React, { Component } from 'react'
let flag = false
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      canGoBack:false,
      barColor:'#6199ff',
      progress:0
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
    if(nav.canGoBack){
      this.setState({
        barColor:'white'
      })
    }else{
      this.setState({
        barColor:'#6199ff'
      })
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar  
          // animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
          hidden={false}  //是否隐藏状态栏。  
          backgroundColor={this.state.barColor} //状态栏的背景色    
        >  
        </StatusBar>  
        <View style={styles.titleBar}/>
        <AutoHeightWebView
          // originWhitelist={['*']}
          ref="webView"
          style={{flex:1}}
          javaScriptEnabled={true}
          source={{uri: 'http://daitianfang.1459.top/yjy'}}
          scalesPageToFit={false}
          onNavigationStateChange={this.onNavigationStateChange}
          domStorageEnabled = {true}
          onLoadProgress={({nativeEvent}) => this.setState(
            {progress: nativeEvent.progress}
        )}
          // onMessage = {this.toastMessage}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleBar: {
        height: 64,
        backgroundColor: '#ffc0cb',
        justifyContent: 'center',
        alignItems: 'center'
    },
});