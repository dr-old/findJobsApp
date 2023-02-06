import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Cart,
  ChatDetail,
  Form,
  Home,
  Login,
  Maps,
  MapsDirection,
  MapsLocation,
  MapsSearch,
  Notification,
  Product,
  Register,
  Splash,
  Typography,
  VerifyUser,
} from '../containers/pages';
import TabStack from './TabStack';

const Stack = createNativeStackNavigator();

function DashboardStack() {
  const page = [
    {name: 'Home', comp: TabStack, header: false}, // if you can use tab bottom navigation
    {name: 'Splash', comp: Splash, header: false},
    {name: 'Login', comp: Login, header: false},
    {name: 'Product', comp: Product, header: false},
  ];

  return (
    <Stack.Navigator initialRouteName="Home">
      {page.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.comp}
            options={{headerShown: item.header}}
          />
        );
      })}
    </Stack.Navigator>
  );
}

export default DashboardStack;
