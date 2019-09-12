import {StyleSheet, Text, View,Button} from 'native-base';  
import {  createAppContainer} from 'react-navigation';  
import { createBottomTabNavigator,createMaterialTopTabNavigator} from 'react-navigation-tabs';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Match from "./Match";
import MainListed from "./MainListed";
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Article from './Article';
import Icon from 'react-native-vector-icons/Ionicons';



const TopNewsTab=createMaterialTopTabNavigator(
    { 
        ASIA:{
            screen:props=><MainListed {...props} content="osiyo"/>,
            navigationOptions:{
                title:'osiyo',      
            }
    },
        ESP:{
            screen:props=><MainListed {...props} content="ispaniya"/>,
            navigationOptions:{
                title:'ispaniya',
                
            }
    },
        EURO:{
        screen:props=><MainListed {...props} content="evropa"/>,
        navigationOptions:{
            title:'evropa',
            
        }
    },
        UZB:{
        screen:props=><MainListed {...props} content="ozbekiston"/>,
        navigationOptions:{
            title:"o'zbekiston",
            
        }
    },
        WORLD:{
        screen:props=><MainListed {...props} content="zha"/>,
        navigationOptions:{
            title:'jahon',
            
        }
    }
    },
    {
        navigationOptions: {
            header: null,
          },
        initialRouteName:'ASIA',
        tabBarOptions: {
            scrollEnabled:true,
            labelStyle: {
              fontSize: 12,
              color:'#000000',
              indicatorStyle:{color:"#f75605"}
            },
            tabStyle: {
              height:40 ,
                     },
            style: {
              backgroundColor: '#FFFFFF',
              
            },
          },
         
    }
    
);
const MatchStack =createStackNavigator({Match:{
    screen:Match,
    navigationOptions:{
        title:"uff.uz"
    }
}});
const MainStack =createStackNavigator(
    {
        MainListed:{
            screen:TopNewsTab
        },
        Article:{
            screen:Article,
            navigationOptions:{
                title:"tribuna.uz",
              }
        }}
    );
const TabNavigator = createBottomTabNavigator(
    {
        Match:{
            screen:MatchStack,
            navigationOptions:{
                tabBarLabel:"Match",
                tabBarIcon:({tintColor})=>(
                    <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}  >
                        <Icon style={[{color:tintColor}]} size={28} name="ios-football" />
                    </View>
                ), 
            tabBarOptions: {
                activeTintColor: '#1aa5b0',
                inactiveTintColor: '#b4c1c2',
            },
            },
            
        },
        News:{
                screen:MainStack,
                navigationOptions:({navigation})=>({
                tabBarVisible:navigation.state.routes[navigation.state.index].routeName==="Article"?false:true,
                tabBarLabel:"Yangiliklar",
                tabBarIcon:({tintColor})=>(
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon style={[{color:tintColor}] } size={28} name="md-flame" />
                    </View>
                ),
                tabBarOptions: {
                    activeTintColor: '#f75605',
                    inactiveTintColor: '#b4c1c2',
            },      
         })
        },
      },
        {  
            initialRouteName: 'News',  
            // activeColor: '#f0edf6',  
            // inactiveColor: '#000000',           
        },
);

export const TabNavigation= createAppContainer(TabNavigator);
