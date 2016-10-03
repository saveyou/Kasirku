import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Container, Header, Content, List, ListItem, InputGroup, Input, Icon, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class AuthRegister extends Component {
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
                        
                            <ListItem>
                                <InputGroup>
                                    <Icon name='md-unlock' style={{fontSize: 23, color: '#011627'}}/>
                                    <Input placeholder='Password' secureTextEntry={true}/>
                                </InputGroup>
                            </ListItem>

                            <ListItem>
                                <InputGroup>
                                    <Icon name='md-phone-portrait' style={{fontSize: 23, color: '#011627'}}/>
                                    <Input placeholder='Nomor Telepon' secureTextEntry={true}/>
                                </InputGroup>
                            </ListItem>

                            <ListItem>
                                <InputGroup>
                                    <Icon name='md-paper' style={{fontSize: 15, color: '#011627'}}/>
                                    <Input placeholder='Nama Bisnis' secureTextEntry={true}/>
                                </InputGroup>
                            </ListItem>
                        </List>
                    </View>
                    <View style={{paddingTop:20,alignItems:'center'}}>
                        <Button block rounded style={{backgroundColor:'#2EC4B6'}}> Register </Button>
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