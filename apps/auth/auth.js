import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Container, Content} from 'native-base';

import AuthLogin from './auth_login';
import AuthRegister from './auth_register';
import AuthForgotPassword from './auth_forgot_password';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {page: 'login', error: ''};
        this.goToPage = this.goToPage.bind(this);
        this.setError = this.setError.bind(this);
    }
    goToPage(page){
        this.setState({page: page,error:''});
    }
    setError(error){
        this.setState({error: error});
    }
    render() {
        let render_auth;
        switch(this.state.page){
            case 'register':
                render_auth = <AuthRegister setError={this.setError} goToPage={this.goToPage} {...this.props}/>;
                break;
            case 'forgotPassword':
                render_auth = <AuthForgotPassword setError={this.setError} goToPage={this.goToPage} {...this.props}/>;
                break;
            default:
                render_auth = <AuthLogin setError={this.setError} goToPage={this.goToPage} {...this.props}/>;
        }
        return (
            <Container theme={this.props.env.theme}  >
                <Content>
                    <View style={{alignItems: 'center', paddingTop:80}}>
                        <Image
                          source={require('../../img/logo.png')}
                          style={{width: 120, height: 120}}
                        />
                    </View>
                    <View style={{alignItems: 'center', paddingTop:40, paddingLeft:50, paddingRight:50}}>
                        <Text style={{color:'#E71d36',fontSize:12}}>
                            {this.state.error}
                        </Text>
                    </View>
                    <View style={{paddingTop:10,paddingLeft:50,paddingRight:50}}>
                        {render_auth}
                    </View>
                </Content>
            </Container>
        );
    }
}