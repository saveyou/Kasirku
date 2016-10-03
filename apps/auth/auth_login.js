import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Navigator } from 'react-native';
import { Container, Header, Content, List, ListItem, InputGroup, Input, Icon, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import {login} from '../../data/user';

export default class AuthLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {page: 'login', emai: '', password: ''};
    }
    setKey(key){
        try {
            this.props.env.db.write(() => {
              this.props.env.db.create('SystemSetting', {name: 'LoginKey', value: key}, true);
            });
            this.props.navigator.push({name: 'Main'});
        }
        catch(e) {
            this.props.setError('Kesalahan aplikasi');
        }
    }
    loginFailed(errors){
        let parsed_errors = []
        for (let key in errors) {
            parsed_errors.push(errors[key]);
        }
        this.props.setError(parsed_errors.join(', '));
    }
    render() {
        afterLogin = (res) => {
            console.log(res);
            if(res.status == 200){
                this.setKey(res.data.access_key);
            }else{
                this.loginFailed(res.data.error)
            }
        }
        return (
            <Container>
                <Content>
                    <View style={{paddingLeft:-20}}>
                        <List>
                            <ListItem>
                                <InputGroup>
                                    <Icon name='md-at' style={{fontSize: 18, color: '#011627'}} />
                                    <Input placeholder='Email' onChangeText={(text) => {this.setState({email:text}) }} />
                                </InputGroup>
                            </ListItem>
                        
                            <ListItem>
                                <InputGroup>
                                    <Icon name='md-unlock' style={{fontSize: 23, color: '#011627'}}/>
                                    <Input placeholder='Password' secureTextEntry={true} onChangeText={(text) => {this.setState({password:text}) }}/>
                                </InputGroup>
                            </ListItem>
                        </List>
                    </View>
                    <View style={{paddingTop:20,alignItems:'center'}}>
                        <Button block rounded style={{backgroundColor:'#2EC4B6'}} onPress={() => login(this.state.email, this.state.password, function(res){afterLogin(res)})}> Login </Button>
                    </View>
                    <View style={{paddingTop:20}}>                  
                        <Grid>
                            <Col>
                                <TouchableHighlight onPress={() => this.props.goToPage('forgotPassword')}>
                                    <Text style={{fontSize:12,color:'#011627',textDecorationLine:'underline'}}>Lupa Password</Text>
                                </TouchableHighlight>
                            </Col>
                            <Col>
                                <TouchableHighlight onPress={() => this.props.goToPage('register')}>
                                  <Text style={{textAlign:'right',fontSize:12,color:'#e71d36',textDecorationLine:'underline'}}>Register</Text>
                                </TouchableHighlight>
                            </Col>
                        </Grid>
                    </View>
                </Content>
            </Container>
        );
    }
}