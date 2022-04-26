import React, {Component} from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from "../Screens/Feed";
import CreateStory from '../Screens/CreateStory';
import {Ionicons} from "react-native-vector-icons";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator
                  screenOptions={({route})=>({
                    tabBarIcon:({focused,size,color})=>{
                        var iconName="";
                        if(route.name === "Feed"){
                           iconName = focused ? "book" : "book-outline"
                        }else if(route.name === "CreateStory"){
                            iconName= focused ? "create" : "create-outline"
                        }

                        return <Ionicons name={iconName} colr={color} size={size}/>
                    }
                  })}
                  
                  tabBarOptions={{
                    activeTintColor:"tomato",
                    inactiveTintColor:"grey"
                  }}>
                    <Tab.Screen name="Feed" component={Feed}/>
                    <Tab.Screen name="CreateStory" component={CreateStory}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}