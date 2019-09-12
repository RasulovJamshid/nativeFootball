import React, { Component } from 'react';
import {BackHandler,View} from "react-native"; 
import { Container,Text,StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import Footer from "./Footer.js";
import Header from "./Header.js";
import Content from "./Content.js";
import Match from "./Match.js";
import MainListed from "./MainListed.js";
import ArticleContent from "./Article";
import { Provider } from 'react-redux';
import {createStore,combineReducers}from 'redux';
import Article from './Article';
import AppContainer from "./Navigation";
import {TabNavigation} from "./TabNavigation.js";
// import {allReducers,initialState} from './reducers.js';

const initialState={
  items: [],
  articleLink:' ',
  articleMod:false,
  isLoading:true,
  isRefreshing:false,
  tab:true
}
//Reducer
const items=(state=[],action)=>{
switch(action.type){
  case 'FETCH':
    return action.payload;
  default : 
    return state
}
}
//Action
export const itemsAct =(response)=>{
return{
  type:'FETCH',
  payload:response,
}
}
//Reducer
const tab=(state=true,action)=>{
  switch(action.type){
    case 'SWITCHNEWS':
      return action.payload;
    default : 
      return state
  }
  }
  //Action
export const tabAct =(response)=>{
  return{
    type:'SWITCHNEWS',
    payload:response,
  }
  }
  //Reducer
const articleLink=(state=' ',action)=>{
  switch (action.type) {
      case "REQUEST":
          return action.payload;
      default:
          return state;
  }
}
//Action
export const articleAct=(response)=>{
  return{
      type:'REQUEST',
      payload:response
  }
}

//Reducer
const articleMod=(state=false,action)=>{
  switch (action.type) {
      case 'TRUFALART':
          return action.payload;
      default:
          return state;
  }
}
//Action
export const articleBool =(isX)=>{
return{
  type:'TRUFALART',
  payload:isX
}
}

//Reducer
const isLoading =(state="EEE",action)=>{
  switch (action.type) {
      case "TRUFALLOD":
          return action.payload;  
      default:
          return state;
  }
}
//Action
export const loadAct =(response)=>{
return{
  type:"TRUFALLOD",
  payload:response
}
}
//Reducer
const isRefreshing=(state=false,action)=>{
  switch (action.type) {
      case 'TRUFALFRESH':
          return action.payload;
      default:
          return state;
  }
}
//Action
export const refreshAct=(response)=>{
  return{
      type:'TRUFALFRESH',
      payload:response
  }
}

const allReducers=combineReducers({
  items,
  articleLink,
  isRefreshing,
  isLoading,
  articleMod,
  tab
})
export const store = createStore(allReducers,initialState);

export default class AnatomyExample extends Component {
 
  
  render() {
    return (
      <Provider store={store}>
      <StyleProvider style={getTheme(material)}>
      <Container>
      
      {/* <Header/>
      <Content/>
       */}
       <TabNavigation/>
      </Container>
      </StyleProvider>
      </Provider>
    );
  }
}


