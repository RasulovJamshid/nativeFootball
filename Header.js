import React from "react";
import {Header,Body,Left,Button,Icon,Title,Right} from "native-base";
import {connect} from "react-redux";
import {store,articleBool} from "./App.js";
class Head extends React.Component{
    render(){
        return(
            <Header>
          <Left>
          {this.props.articleMod?
            <Button onPress={()=>(this.props.articleBool())} iconLeft transparent >
              <Icon name='arrow-back' />
            </Button>:
            <Button  iconLeft transparent >
              <Icon name='flame' />
            </Button>
          }
          </Left>
          <Body>
            <Title>JR</Title>
          </Body>
          
        </Header>
        );
    }
}
const mapStateTopProps=(state)=>({
  articleMod:state.articleMod,
});
const mapDispatchToProps=(dispatch)=>({
  articleBool:()=>dispatch(articleBool(false))
})
export default connect(mapStateTopProps,mapDispatchToProps)(Head);