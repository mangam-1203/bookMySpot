import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import List from './components/List/List';
import Movie from './components/Movie/Movie';
import Confirmation from './components/Confirmation/Confirmation';

const Home = () => (
  <Text>Home</Text>
)

const AppNavigator = createStackNavigator({
  Home: List,
  Movie : Movie,
  Confirmation : Confirmation
},
  {
    initialRouteName: "Home"
  });

export default createAppContainer(AppNavigator);
