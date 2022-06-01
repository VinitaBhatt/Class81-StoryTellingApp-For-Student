import React, {Component} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Feed from '../Screens/Feed'
import CreateStory from '../Screens/CreateStory';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator
                screenOptions={({route})=>({
                    tabBarIcon: ({focused,color,size})=>{
                        var iconName;
                        if(route.name === "Feed"){
                            iconName = focused ?"book" : "book-outline"
                        }else if(route.name == "Create Story"){
                            iconName = focused ?"create" : "create-outline"
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>
                    }
                })}
                
                tabBarOptions={{
                    activeTintColor:'tomato',
                    inactiveTintColor:'grey'
                }}>
                    <Tab.Screen name="Feed" component={Feed}/>
                    <Tab.Screen name="Create Story" component={CreateStory}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}