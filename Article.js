import React from "react";
import {WebView} from "react-native-webview";
import {  Content, Spinner} from "native-base";
import cheerio from "cheerio-without-node-native";
import {connect} from "react-redux";
import {store,loadAct,articleAct} from './App.js';

async function loadArticle(url){                                
    const searchUrl=`http://m.tribuna.uz${url}`;
    const response = await fetch(searchUrl); // fetch page
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);      // parse HTML string
    const body="<body>"+'<div class="Bcontainer">'+'<div class="news_single_content">'+$(".news_single_content").html()+"</div>"+"<div>"+"</body>";
    
    head='  <head><meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0"><link href="http://m.tribuna.uz/assets/ee9307a4/styles/site.css?v=1554282954" rel="stylesheet">  <link href="http://m.tribuna.uz/assets/b36db2d3/css/menu-admin.css?v=1554282953" rel="stylesheet">  <link href="http://m.tribuna.uz/assets/ee9307a4/styles/main.css?v=1554282954" rel="stylesheet">  <link href="http://m.tribuna.uz/assets/ee9307a4/libs/select2/select2.css?v=1554282954" rel="stylesheet">  <link href="http://m.tribuna.uz/assets/ee9307a4/libs/normalize/normalize.css?v=1554282954" rel="stylesheet">  <link href="http://m.tribuna.uz/assets/ee9307a4/libs/owl/owl.carousel.min.css?v=1554282954" rel="stylesheet"></head>'
    const htmlMode=head+body;
  
    
    return htmlMode;
  }

   class ArticleContent extends React.Component{
    constructor(props){
      super(props);
      this.state={
         isArticleLoaded:false,
         articleData:' ',
    }; 
  }

      
  
    componentDidMount(){this.articleLoader(this.props.uri)};

    // componentWillUnmount(){}
    
    articleLoader=(url)=>{
      this.setState({isArticleLoaded:false});
      // store.dispatch(loadAct(true));
      // this.setState({isLoading:true});
      loadArticle(url).then(res=>{
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
  
const mapStateToProps=(state)=>{
  return {
    articleMod:state.articleMod,
    uri:state.articleLink
  }
}

export default connect(mapStateToProps)(ArticleContent);