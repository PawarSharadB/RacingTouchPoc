/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeTabBar, MyTabBar } from './components/TabBar/my-tab-bar';
import { createStackNavigator } from '@react-navigation/stack';
import routes from './navigation/routes';

export type RootStackNavigationParamList = {
  [routes.Race]: undefined;
  [routes.Info]: undefined;
  [routes.Betslip]: undefined;
  [routes.More]: undefined;
};

const Stack = createStackNavigator<RootStackNavigationParamList>();

const transformObjectToScreen = (screenObj: any) => {
  return Object.entries(screenObj).map(([screenKey, screenValue]) => {
    return (
      <Stack.Screen
        name={screenValue.name}
        component={screenValue.component}
        key={screenKey}
      />
    );
  });
};

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
          tabBar={props => <MyTabBar {...props} />}>
          {transformObjectToScreen(HomeTabBar)}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
