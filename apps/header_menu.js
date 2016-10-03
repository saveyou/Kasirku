import React, { Component } from 'react';
import { View, Image, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import { Container, Content, Button} from 'native-base';

export default class HeaderManu extends Component {
    constructor(props) {
        super(props);
    }

		render() {
        var _scrollView: ScrollView;
        return (
		      <View style={{borderBottomColor:'#efefef',borderBottomWidth:0.5, backgroundColor:'#fdfffc'}}>
		        <ScrollView
		          horizontal={true}
		          showsHorizontalScrollIndicator={false}>
		            <Menu title='Kasir' 		page_link='order'	sub_page_link='new'	color='#2EC4B6' 	{...this.props} />
		            {/*<Menu title='Diproses' 	page_link='order'	color='#ff9f1c' 	{...this.props} />
		            <Menu title='Antrian' 	page_link='order'	color='#ff9f1c' 	{...this.props} />
		            <Menu title='Dapur' 		page_link='order'	color='#ff9f1c' 	{...this.props} />*/}
		            <Menu title='Order' 		page_link='order'	sub_page_link='list'	color='#2EC4B6' 	{...this.props} />
		            {/*<Menu title='Supir' 		page_link='product'	color='#ff9f1c' 	{...this.props} />
		            <Menu title='Kamar' 		page_link='product'	color='#ff9f1c' 	{...this.props} />*/}
		            <Menu title='Produk' 		page_link='product'	color='#2EC4B6'	{...this.props} />
		            <Menu title='Report' 		page_link='report'	color='#2EC4B6' 	{...this.props} />
		            <Menu title='Setting' 	page_link='setting'	color='#2EC4B6' 	{...this.props} />
		            <Menu title='Logout' 		page_link='logout'	color='#e71d36' />
		        </ScrollView>
		      </View>
		    );
		}

}
var createMenu = (v, i) => <Menu key={i} title={v} />;

class Menu extends React.Component {
	constructor(props) {
	    super(props);
	}
	setNativeProps(nativeProps) {
	  this.refs['Button'].setNativeProps(nativeProps);
	}

  render() {
  	let color = this.props.color;
  	let page = this.props.page_link;
  	let sub_page = this.props.sub_page_link || false;
  	let param_id = this.props.param_id_link || false;
  	let is_active = page == this.props.current_page && sub_page == this.props.current_sub_page && param_id == this.props.current_param_id
  	let active_style = is_active ? {borderBottomWidth:1,borderBottomColor:'#011627'} : {}
    return (
	  	<View style={[styles.menu, active_style]}>
				<Button disabled={is_active} style={{backgroundColor:color}} textStyle={{color:'#fff',fontWeight:'bold'}} onPress={() => this.props.goToPage(page, sub_page, param_id)}>{this.props.title}</Button>
	 	 	</View>
    );
  }
}

var styles = StyleSheet.create({
  menu: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 13,
    paddingBottom: 13,
    alignItems: 'center',
  }
});