import React from "react";
import {FooterTab,Button,Text,Footer,Icon,StyleProvider} from "native-base";
import {tabAct} from './App.js';
import { connect } from "react-redux";
class Switch extends React.Component{
    render(){
        return(
          
            <Footer>
            <FooterTab>
            <Button active={!this.props.mode} onPress={()=>(this.props.tabActF())} vertical>
              <Icon style={{ color: "black" }} name="football" />
              <Text>MATCH</Text>
              </Button>
            <Button vertical>
              <Icon style={{ color: "red" }} name="heart" />
              <Text>KOMANDA</Text>
              </Button>
            <Button active={this.props.mode} onPress={()=>(this.props.tabAct())} vertical >
              <Icon style={{ color: "orange" }} name="flame" />
              <Text>YANGILIK</Text>
              </Button>
            </FooterTab>
          </Footer>
          
        );
    }
}
const mapStateToProps=(state)=>({
  mode : state.tab
})

const mapDispatchToProps=(dispatch)=>({
  tabAct : ()=>dispatch(tabAct(true)),
  tabActF: ()=>dispatch(tabAct(false))
})

export default connect(mapStateToProps,mapDispatchToProps)(Switch);