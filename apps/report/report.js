import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Text} from 'native-base';

export default class Report extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <View style={{alignItems: 'center'}}>
            <Text>Report Page</Text>
          </View>
        );
    }
}