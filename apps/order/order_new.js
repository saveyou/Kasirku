import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Text} from 'native-base';
import BarcodeScanner from 'react-native-barcodescanner';

export default class OrderNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'login',
            torchMode: 'on',
            cameraType: 'back',
        };
        this.goToPage = this.goToPage.bind(this);
    }

    barcodeReceived(e) {
        console.log('Barcode: ' + e.data);
        console.log('Type: ' + e.type);
    }

    goToPage(page){
        this.setState({page: page});
    }

    render() {
        return (
          <View style={{alignItems: 'center'}}>
            <Text>Cashier Page</Text>
            {<BarcodeScanner
                onBarCodeRead={this.barcodeReceived}
                style={{ flex: 1, width: 300, height: 300 }}
                torchMode={this.state.torchMode}
                cameraType={this.state.cameraType} />}
            </View>
        );
    }
}