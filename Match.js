import React from "react";
import {WebView} from "react-native-webview";
import {  Content, Spinner} from "native-base";
import cheerio from "cheerio-without-node-native";
import {connect} from "react-redux";
import {store,loadAct,articleAct} from './App.js';

async function loadMatch(url='https://uff.uz/en/results/'){                                
    const searchUrl=`${url}`;
    const response = await fetch(searchUrl); // fetch page
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);      // parse HTML string
    const body="<body>"+'<div class="games-list">'+$(".games-list").html()+"</div>"+"</body>";
    
    head='  <head><meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0"><link rel="manifest" href="https://uff.uz/static/images/icons/manifest.json"> <link rel="stylesheet" href="https://uff.uz/static/styles/styles.css"><link rel="mask-icon" href="https://uff.uz/static/styles/styles.css/static/images/icons/safari-pinned-tab.svg" color="#5d8f2e"><link rel="manifest" href="https://uff.uz/static/styles/styles.css/static/images/icons/manifest.json"><link rel="icon" type="image/png" href="https://uff.uz/static/styles/styles.css/static/images/icons/favicon-16x16.png" sizes="16x16"><link rel="icon" type="image/png" href="https://uff.uz/static/styles/styles.css/static/images/icons/favicon-32x32.png" sizes="32x32"><link rel="apple-touch-icon" sizes="180x180" href="https://uff.uz/static/styles/styles.css/static/images/icons/apple-touch-icon.png"></head>'
    const htmlMode=head+body;
  
    
    return htmlMode;
  }

   class MatchContent extends React.Component{
    constructor(props){
      super(props);
      this.state={
         isArticleLoaded:false,
         articleData:' ',
    }; 
  }

      
  
    componentDidMount(){this.matchLoader('https://uff.uz/en/results/')};

    // componentWillUnmount(){}
    
    matchLoader=(url)=>{
      this.setState({isArticleLoaded:false});
      // store.dispatch(loadAct(true));
      // this.setState({isLoading:true});
      loadMatch(url).then(res=>{
      return  this.setState({articleData:res,isArticleLoaded:true});
      });
      // store.dispatch(loadAct(false));
      // store.dispatch(articleAct(true));
      
      // this.setState({isArticleMode:true});
    }
    
    render(){
      if(this.state.isArticleLoaded){
        return( 
          
        <WebView 
         scalesPageToFit={true}
         source={{
          html: this.state.articleData          
         }}/>)
          }
      else return (
        <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}><Spinner color='green' /></Content>
       )}
  }
  

export default MatchContent;