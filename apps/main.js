import React, { Component } from 'react';
import { View, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, Button} from 'native-base';
import ScrollingMenu from 'react-native-scrolling-menu';

import Order from './order/order';
import Product from './product/product';
import Report from './report/report';
import Setting from './setting/setting';
import HeaderMenu from './header_menu';
import Logout from './auth/auth_login';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {current_page: 'order', current_sub_page: 'new', current_param_id: false, error: ''};
        this.goToPage = this.goToPage.bind(this);
    }
    goToPage(new_page, new_sub_page = false, new_param_id = false){
        this.setState({current_page: new_page, current_sub_page: new_sub_page, current_param_id: new_param_id});
    }
    setError(error){
        this.setState({error: error});
    }

	render() {
        let render_page;
        switch(this.state.current_page){
            case 'product':
                render_page = <Product goToPage={this.goToPage} sub_page={this.state.current_sub_page} param_id={this.state.current_param_id} {...this.props}/>;
                break;
            case 'report':
                render_page = <Report goToPage={this.goToPage} sub_page={this.state.current_sub_page} param_id={this.state.current_param_id} {...this.props}/>;
                break;
            case 'setting':
                render_page = <Setting goToPage={this.goToPage} sub_page={this.state.current_sub_page} param_id={this.state.current_param_id}  {...this.props}/>;
                break;
            case 'logout':
                render_page = <Logout />;
            case 'order':
                render_page = <Order goToPage={this.goToPage} sub_page={this.state.current_sub_page} param_id={this.state.current_param_id}  {...this.props}/>;
                break;
        }
        return (
            <View style={{flex: 1}}>
              <HeaderMenu page={this.state.page} current_page={this.state.current_page}  current_sub_page={this.state.current_sub_page}  current_param_id={this.state.current_param_id}  goToPage={this.goToPage} {...this.props}/>
              <View style={{paddingTop:10, paddingBottom:10, paddingLeft:5, paddingRight:5}}>
                {render_page}
              </View>
            </View>
		    );
	}

}