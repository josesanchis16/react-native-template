import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default class App extends React.Component {

  state = {}

  MainScreen = props => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={this.HomeScreen} />
        <Stack.Screen options={{ ...TransitionPresets.SlideFromRightIOS, }} name="Tab" component={this.TabScreen} />
      </Stack.Navigator>
    )
  }

  HomeScreen = props => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Jose's Rocks on HomeScreen
        </Text>
        <Button
          onPress={() => props.navigation.navigate("Tab")}
          title="Secondary Screen"
        />
      </View>
    )
  }

  TabScreen = props => {
    return (
      <Tab.Navigator backBehavior={"none"}>
        <Tab.Screen name="Tab1" component={this.Tab1} />
        <Tab.Screen name="Tab2" component={this.Tab2} />
      </Tab.Navigator>
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //   <Text>
      //     Jose's also Rocks on SecondaryScreen
      //   </Text>
      //   <Button
      //     onPress={() => props.navigation.toggleDrawer()}
      //     title="Toggle Drawer"
      //   />
      // </View>
    )
  }

  Tab1 = props => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
        <Text>Tab 1</Text>
        <Button
          onPress={() => props.navigation.navigate('Tab2')}
          title="Tab 2"
        />
      </View>
    )
  }

  Tab2 = props => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
        <Text>Tab 2</Text>
        <Button
          onPress={() => props.navigation.navigate('Tab1')}
          title="Tab 1"
        />
        <Button
          onPress={() => props.navigation.navigate('Home')}
          title="Go Home!"
        />
        <Button
          onPress={() => props.navigation.toggleDrawer()}
          title="Toggle Drawer"
        />
      </View>
    )
  }

  LoginScreen = props => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Loggin Screen
        </Text>
        <Button
          onPress={() => props.navigation.navigate('Home')}
          title="Go Home!"
        />
      </View>
    )
  }

  RegisterScreen = props => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Register Screen
        </Text>
        <Button
          onPress={() => props.navigation.navigate('Home')}
          title="Go Home!"
        />
      </View>
    )
  }

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={this.MainScreen} />
          <Drawer.Screen name="Login" component={this.LoginScreen} />
          <Drawer.Screen name="Register" component={this.RegisterScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}