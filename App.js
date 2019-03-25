// import React from 'react';

// import PlacesApp from './PlacesApp';


// const App = () => (
//   <PlacesApp />
// )

// export default App;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//import React,{Component} from "react";
//import AppContainer from './AppContainer';
//
//export default class App extends React.Component {
//  render() {
//    return <AppContainer />;
//  }
//}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//import React from 'react';
//import { Text, View, Button } from 'react-native';
//import {
//  createBottomTabNavigator,
//  createStackNavigator,
//  createAppContainer,
//} from 'react-navigation';
//
//class DetailsScreen extends React.Component {
//  render() {
//    return (
//      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//        <Text>Details!</Text>
//      </View>
//    );
//  }
//}
//
//class HomeScreen extends React.Component {
//  render() {
//    return (
//      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//        {/* other code from before here */}
//        <Text>Home</Text>
//        <Button
//          title="Go to Details"
//          onPress={() => this.props.navigation.navigate('Details')}
//        />
//      </View>
//    );
//  }
//}
//
//class SettingsScreen extends React.Component {
//  render() {
//    return (
//      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//        {/* other code from before here */}
//        <Text>Settings</Text>
//        <Button
//          title="Go to Details"
//          onPress={() => this.props.navigation.navigate('Details')}
//        />
//      </View>
//    );
//  }
//}
//
//class ProfileScreen extends React.Component {
//  render() {
//    return (
//      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//        {/* other code from before here */}
//        <Text>Profile</Text>
//        <Button
//          title="Go to Details"
//          onPress={() => this.props.navigation.navigate('Details')}
//        />
//      </View>
//    );
//  }
//}
//
//const HomeStack = createStackNavigator({
//  Home: HomeScreen,
//  Details: DetailsScreen,
//});
//
//const SettingsStack = createStackNavigator({
//  Settings: SettingsScreen,
//  Details: DetailsScreen,
//});
//
//const ProfileStack = createStackNavigator({
//  Profile : ProfileScreen,
//  Details : DetailsScreen
//})
//
//export default createAppContainer(createBottomTabNavigator(
//  {
//    Home: HomeStack,
//    Settings: SettingsStack,
//    Profile : ProfileStack
//  },
//  {
//    /* Other configuration remains unchanged */
//  }
//));

////////////////////////////////////////////////////////////////////////////////////////////////

//import React from "react";
//import { View, Text } from "react-native";
//import { createStackNavigator, createAppContainer } from "react-navigation";
//
//class HomeScreen extends React.Component {
//  render() {
//    return (
//      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//        <Text>Home Screen</Text>
//      </View>
//    );
//  }
//}
//
//const AppNavigator = createStackNavigator({
//  Home: {
//    screen: HomeScreen
//  }
//});
//
//export default createAppContainer(AppNavigator);

 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View} from 'react-native';
 import List from './components/List/List';
 import Navigator from './Navigator';

 export default class App extends React.Component {
  render() {
    return <Navigator />;
  }
}

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   }
 });
