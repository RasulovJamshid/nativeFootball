import React from "react";
import {ScrollView,RefreshControl,StyleSheet} from "react-native";
import {  Content, Spinner,Icon,View, Button,Text,Tabs,Tab, Fab} from "native-base";
import Card from "./Card.js";
import cheerio from "cheerio-without-node-native";
import { store ,loadAct,articleBool} from "./App.js";
import { connect } from "react-redux";
import {NavigationEvents,withNavigation} from 'react-navigation';

async function loadContent(category="osiyo") {
    const response = await fetch(`http://m.tribuna.uz/oz/news/category/${category}`); // fetch page
    const htmlString = await response.text();
    var headersArr=[],imagesArr=[],contentUrl=[];
    const $ = cheerio.load(htmlString);      // parse HTML string
  
    $(".item").each((i,e)=>{
      contentUrl[i]=$(e).children(".news-list-item").children("a").attr("href");
      imagesArr[i]=$(e).children(".news-list-item").children("a").children("img").attr("src");
      headersArr[i]=$(e).children(".news-list-item").children(".news-title").text().trimLeft();
      
   })
  
    const arrObj=[];
    for(let i=0;i<headersArr.length;i++){
      arrObj[i]={title:headersArr[i],imageLink:imagesArr[i],uri:contentUrl[i]};
    }
    return arrObj;
    }




 class MainListed extends React.Component{
    constructor(props){
    super(props);
      this.state={
        refreshing:false,
        items:[],
        active:false
    }
  }
  static navigationOptions = {
    header:null,
  };
    

    componentDidMount(){
      this.focusListener=this.props.navigation.addListener('didFocus',
      ()=>!this.state.items[0]&&this.requestPage(this.props.content))
    };
    componentWillUnmount(){
      this.focusListener.remove();
      // this.setState({items:[]})};
    }


    articleLoader=()=>{
        store.dispatch(articleBool(true));     
      }



  _onRefresh=()=>
  {
    this.setState({refreshing: true});
    this.reloadPage(this.props.content);
  }


  reloadPage = (content) =>
       loadContent(content)
        .then((response)=>
          (this.setState({items:response,refreshing: false})));
  //first time getting list of titles

  requestPage= (content) =>
    {
      store.dispatch(loadAct(true));
    loadContent(content)
    .then((response)=>
    {this.setState({items:response});
    store.dispatch(loadAct(false));});
    
  }   

    render(){
      if(this.props.isLoading){
        return (
         <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
          <Spinner color='green' />
         </Content>)
      }
      else
        {
          return(
            <View>
           <ScrollView 
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }  >
          <Content>
                   {
                                this.state.items.map((item)=>
                                <Card navigation={this.props.navigation} action={this.articleLoader} {...item}  />)
                   }         
          </Content>
           </ScrollView>
      </View>
        )
      }
    }
}

const mapStateToProps=(state)=>{
  return{
    isLoading:state.isLoading,
    articleData:state.articleData
  }
}

export default connect(mapStateToProps)(MainListed);


