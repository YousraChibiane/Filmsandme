import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './Navigation'
import Favorites from '../Components/Favorites'
import {MaterialIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class NavigationBottom extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Search') {
            iconName = focused
            ? 'search'
            : 'search';
          } else if (route.name === 'Favoris') {
            iconName = 'favorite';
          }

          return <MaterialIcons name={iconName} size={size} color={color}     />;
            },
          })}
          tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Search" component={Navigation}/>
          <Tab.Screen name="Favoris" component={Favorites}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}


export default NavigationBottom
