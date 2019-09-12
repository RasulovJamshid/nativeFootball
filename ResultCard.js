import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem,Text,Button, Left, Body } from 'native-base';
import {connect} from "react-redux";
import {articleAct,articleBool} from './App.js';

 export default class CardShowcase extends Component {

  render() {
    return (

          <Card style={{borderRadius:10}}>
            <CardItem  cardBody  >
                <Image source={{uri:this.props.imageLink}} style={{height: 160, borderRadius:10,width: null, flex: 1}}/>
            </CardItem>

            <CardItem button onPress={()=>{this.props.articleAct(this.props.uri);this.props.articleBool();}}>
              <Left>
                  <Body>
                  <Text>{this.props.title}</Text>
                  <Text note>tribuna.uz</Text> 
                </Body>
              </Left>

            </CardItem>
            
          </Card>

    );
  }
}

// const mapStateToProps=(state)=>(
//     {
//       title:state.items
//     }
// )
     

