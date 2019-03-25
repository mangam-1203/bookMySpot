import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";


class HomeScreen extends React.Component {
  static navigationOptions = {
    title :  "Home",
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
};

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
          title: params ? params.otherParam : 'A Nested Details Screen',
          /* These values are used instead of the shared configuration! */
          headerStyle: {
            backgroundColor: navigationOptions.headerTintColor,
          },
          headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
      };

    render() {
      /* 2. Get the param, provide a fallback value if not available */
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      const otherParam = navigation.getParam('otherParam', 'some default value');

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Button
            title="Go to Details... again"
            onPress={() =>
              this.props.navigation.push('Details', {
                itemId: Math.floor(Math.random() * 100),
                otherParam : (Math.floor(Math.random() * 100)).toString()
              })}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
          <Button
           title="Update the title"
           onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
         />
        </View>
      );
    }
  }

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details : DetailsScreen
},
{
    initialRouteName : "Home",

    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
      navigationOptions: {
        tabBarLabel: 'Home!',
      },
},);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
