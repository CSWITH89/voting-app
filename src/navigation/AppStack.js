import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens';

const {Navigator, Screen} = createStackNavigator();

const AppStack = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{title: 'SUPER COUNTER 64'}}
      />
    </Navigator>
  );
};

export default AppStack;
