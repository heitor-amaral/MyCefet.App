import { createAppContainer, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation'
import AuthLoadingScreen from './pages/AuthLoadingScreen';
import LoginScreen from './pages/LoginScreen'
import HomeScreen from './pages/HomeScreen'
import GradesScreen from './pages/GradesScreen'
import NewsScreen from './pages/NewsScreen'

import React from 'react';
import { Text, AsyncStorage } from 'react-native';
import { useSelector } from 'react-redux';

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Login: LoginScreen,
    Dashboard: createBottomTabNavigator({
      Home: HomeScreen,
      Grades: GradesScreen,
      News: NewsScreen,
    })
  },
  {
    initialRouteName: 'AuthLoading'
  })
);
