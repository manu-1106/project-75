import React from 'react';
import { StyleSheet, Text, View,Image } from "react-native";
import {createBottomTabNavigator} from 'react-navigation-tabs'
import{createAppContainer} from 'react-navigation'
import writeStoryScreen from './screens/writeStoryScreen'
import readStoryScreen from './screens/readStoryScreen'

export default function App() {
  
}
const TabNavigator = createBottomTabNavigator({
  writeStory: { screen: writeStoryScreen },
  readStory: { screen: readStoryScreen }
},
{
  dafaultNavigationOptions:({navigation})=>({
    tabBaricon:()=>{
      const routName=navigigation.state.routName
      console.log(routName)
      if(routName==='writeStory'){
        return(
          <Image
          source={require("../read.png")}
          style={{width:30,height:30}}/>   
          
          )

      }
      else if(routName==='readStory'){
            return(
              <Image
              source={require("../write.png")}
              style={{width:30,height:30}}
              />
            )
      }
    }
  })
  }
);

const AppContainer = createAppContainer(TabNavigator);

