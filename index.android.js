/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  BackAndroid
} from 'react-native';

import main from './static/component/main/main';

var _navigator = null;

class entrance extends Component{
  render(){
    return(
        <Navigator
            initialRoute={{name:"main",component:main}}
            renderScene={
            (route,navigator) =>{
              _navigator = navigator;
              let Component = route.component;
              return <Component {...route.params} navigator={navigator} />
            }
          }
            configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        />
    );
  }
}

BackAndroid.addEventListener("hardwareBackPress",()=>{
  if(_navigator && _navigator.getCurrentRoutes().length > 1){
    _navigator.pop();
    return true;
  }
  return false;
});

AppRegistry.registerComponent('reactNative', () => entrance);
