/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
  // StyleSheet,
  // Text,
  // View
} from 'react-native';
import { Container, Header, Title, Button, Icon } from 'native-base';


import Auth from './apps/auth/auth';
import Main from './apps/main';

import Config from './app.config.js';
import Theme from './themes/nb_good_money.js';
import DB from './db/db';
var env = {config: Config, theme: Theme, db: DB}

class kasirku extends Component {
  constructor(props) {
      super(props);
      this.state = {initialRoute:'Auth'}
  }

  componentWillMount(){
    this.loginRedirect();
  }

  logout(){
    try {
        this.props.env.db.write(() => {
          let systemSetting = env.db.objects('SystemSetting');
          let loginKey = systemSetting.filtered('name = "LoginKey"');
          env.db.delete(loginKey);
          loginRedirect()
        });
    }
    catch(e) {
        // this.props.setError('Kesalahan aplikasi');
    }
  }
  
  loginRedirect(){
    let systemSetting = env.db.objects('SystemSetting');
    let loginKey = systemSetting.filtered('name = "LoginKey"');
    if(loginKey[0]){
        this.setState({initialRoute:'Main'})
    }
  }

  render() {
    return (
       <Navigator
        initialRoute={{ name: this.state.initialRoute }}
        renderScene={ this.renderScene } />
    );
  }

  renderScene(route, navigator) {
     if(route.name == 'Auth') {
       return <Auth navigator={navigator} env={env} />
     }
     if(route.name == 'Main') {
       return <Main navigator={navigator} env={env} />
     }
  }
}

AppRegistry.registerComponent('kasirku', () => kasirku);
