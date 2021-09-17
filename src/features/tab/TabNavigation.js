import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/HomeScreen';
import SearchScreen from '../search/SearchScreen';
import ReelsScreen from '../reels/ReelsScreen';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Shop" component={SearchScreen} />
      <Tab.Screen name="My" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
