import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem,Text,Button, Left, Body } from 'native-base';
import {connect} from "react-redux";
import {articleAct,articleBool} from './App.js';
import {StackNavigator} from "react-navigation";
 class CardShowcase extends Component {
   

  render() {
    
    return (
          
          <Card style={{borderRadius:10}}>
            <CardItem  cardBody  >
                <Image source={{uri:this.props.imageLink}} style={{height: 160, borderRadius:10,width: null, flex: 1}}/>
            </CardItem>

            <CardItem button onPress={()=>{this.props.articleAct(this.props.uri);this.props.navigation.push('Article');}}>
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

//()=>{this.props.articleAct(this.props.uri);this.props.articleBool();} 
// this.props.navigation.push('Article')
// const mapStateToProps=(state)=>(
//     {
//       title:state.items
//     }
// )
     
// }
const mapDispatchToProps=(dispatch,ownProps)=>({
  articleAct :()=>dispatch(articleAct(ownProps.uri)),
  articleBool : ()=>dispatch(articleBool(true))
});


export default connect(null,mapDispatchToProps)(CardShowcase);
