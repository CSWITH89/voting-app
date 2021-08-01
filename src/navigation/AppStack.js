import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens';

const {Navigator, Screen} = createStackNavigator();

const AppStack = () => {
  return (
    <Navigator
      initialRouteName="Home"
      // screenOptions={{headerShown: false}}>
    >
      <Screen
        name="Home"
        component={Home}
        // options={{title: 'Discover'}}
      />
    </Navigator>
  );
};

export default AppStack;
