import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createNavigationContainerRef} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
// import {useSelector} from 'react-redux';
// import {LoginPage, SplashPage} from '../containers/page';
import MyLinking from './MyLinking';
import DashboardStack from './DashboardStack';
import {Login} from '../containers/pages';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function Router() {
  const login = useSelector(state => state.generalReducer.login);

  return (
    <NavigationContainer linking={MyLinking} ref={navigationRef}>
      {!login?.idToken ? (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <DashboardStack />
      )}
    </NavigationContainer>
  );
}

export default Router;
