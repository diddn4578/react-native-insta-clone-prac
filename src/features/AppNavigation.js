import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './tab/TabNavigation';
import FeedWriteScreen from './home/FeedWriteScreen';
import {Text} from 'react-native';

const AppNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainScreen" component={TabNavigation} />
        <Stack.Screen name="FeedWriteScreen" component={FeedWriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
