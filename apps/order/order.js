import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Text} from 'native-base';

import OrderNew from './order_new';
import OrderList from './order_list';

export default class Order extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let render_page;
        switch(this.props.sub_page){
            case 'new':
                render_page = <OrderNew />;
                break;
            default:
                render_page = <OrderList />;
        }
        return (
            <View>
                {render_page}
            </View>
        );
    }
}