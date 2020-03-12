import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import I18n from './src/Translations/i18n';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default class App extends React.Component {

  state = {}

  MainScreen = props => {

    return (
      <Stack.Navigator >
        <Stack.Screen
          name={`${I18n.t('Home')}`}
          component={this.HomeScreen}
          options={{
            headerLeft: () => (
              <View>
                <Icon name="menu" type="material-icons" onPress={() => props.navigation.toggleDrawer()} size={30} />
              </View>
            )
          }}
        />
        <Stack.Screen
          options={{ ...TransitionPresets.SlideFromRightIOS, }}
          name={`${I18n.t('SecondView')}`}
          component={this.TabScreen} />
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
          onPress={() => props.navigation.navigate(`${I18n.t('SecondView')}`)}
          title="Secondary Screen"
        />
      </View>
    )
  }

  TabScreen = props => {
    return (
      <Tab.Navigator backBehavior={"none"}>
        <Tab.Screen name={`${I18n.t('Tab1')}`} component={this.Tab1} />
        <Tab.Screen name={`${I18n.t('Tab2')}`} component={this.Tab2} />
      </Tab.Navigator>
    )
  }

  Tab1 = props => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
        <Text>Tab 1</Text>
        <Button
          onPress={() => props.navigation.navigate(`${I18n.t('Tab2')}`)}
          title={`${I18n.t('Tab2')}`}
        />
      </View>
    )
  }

  Tab2 = props => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
        <Text>Tab 2</Text>
        <Button
          onPress={() => props.navigation.navigate(`${I18n.t('Tab1')}`)}
          title={`${I18n.t('Tab1')}`}
        />
        <Button
          onPress={() => props.navigation.navigate(`${I18n.t('Home')}`)}
          title={`${I18n.t('Home')}`}
        />
        <Button
          onPress={() => props.navigation.toggleDrawer()}
          title={`${I18n.t('ToggleDrawer')}`}
        />
      </View>
    )
  }

  LoginScreen = props => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          {`${I18n.t('Login')}`}
        </Text>
        <Button
          onPress={() => props.navigation.navigate(`${I18n.t('MainScreen')}`)}
          title={`${I18n.t('Home')}`}
        />
      </View>
    )
  }

  RegisterScreen = props => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          {`${I18n.t('NewUser')}`}
        </Text>
        <Button
          onPress={() => props.navigation.navigate(`${I18n.t('MainScreen')}`)}
          title={`${I18n.t('Home')}`}
        />
      </View>
    )
  }

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator backBehavior={"none"} initialRouteName={`${I18n.t('MainScreen')}`}>
          <Drawer.Screen name={`${I18n.t('MainScreen')}`} component={this.MainScreen} />
          <Drawer.Screen name={`${I18n.t('Login')}`} component={this.LoginScreen} />
          <Drawer.Screen name={`${I18n.t('NewUser')}`} component={this.RegisterScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}