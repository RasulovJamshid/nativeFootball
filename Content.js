import React from "react";
import Article from './Article.js';
import Mainlisted from './MainListed.js';
import Match from './Match.js';
import {store} from './App.js';
import {connect} from "react-redux";

class BaseView extends React.Component {
  constructor(props){
    super(props);
  }
   render() {
     if(!this.props.tab){
      return <Match/>;
     }
     else{
    if (this.props.articleMod){
        return <Article/>;
    }
    else{
      return <Mainlisted isLoading={true}/>;
       }
      }
    }
}



export default connect((state)=>({articleMod:state.articleMod,tab:state.tab,isLoading:state.isloading}))(BaseView);
