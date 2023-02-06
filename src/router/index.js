import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createNavigationContainerRef} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
// import {useSelector} from 'react-redux';
// import {LoginPage, SplashPage} from '../containers/page';
import MyLinking from './MyLinking';
import DashboardStack from './DashboardStack';
import {Login} from '../containers/pages';
import {useSelector} from 'react-redux';
import AuthContext from '../../AuthContext';

const Stack = createNativeStackNavigator();

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function Router() {
  const login = useSelector(state => state.generalReducer.login);
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  const authContext = React.useMemo(
    () => ({
      signInContext: async data => {
        dispatch({type: 'SIGN_IN', token: data.token});
      },
      signOutContext: () => dispatch({type: 'SIGN_OUT'}),
      signUpContext: async data => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  console.log(state);

  return (
    <NavigationContainer linking={MyLinking} ref={navigationRef}>
      <AuthContext.Provider value={authContext}>
        {!state.userToken ? (
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
      </AuthContext.Provider>
    </NavigationContainer>
  );
}

export default Router;
