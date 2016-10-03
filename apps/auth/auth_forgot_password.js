import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Container, Header, Content, List, ListItem, InputGroup, Input, Icon, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class AuthForgotPassword extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View style={{paddingLeft:-20}}>
                        <List>
                            <ListItem>
                                <InputGroup>
                                    <Icon name='md-at' style={{fontSize: 18, color: '#011627'}} />
                                    <Input placeholder='Email' />
                                </InputGroup>
                            </ListItem>
                        </List>
                    </View>
                    <View style={{paddingTop:20,alignItems:'center'}}>
                        <Button block rounded style={{backgroundColor:'#2EC4B6'}}> Reset Password </Button>
                    </View>
                    <View style={{paddingTop:20,alignItems:'center'}}>  
                        <TouchableHighlight onPress={() => this.props.goToPage('login')}>
                            <Text style={{fontSize:12,color:'#011627',textDecorationLine:'underline'}}>Login</Text>
                        </TouchableHighlight>
                    </View>
                </Content>
            </Container>
        );
    }
}