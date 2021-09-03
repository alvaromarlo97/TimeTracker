import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login/Login';
import MyTimer from '../Crono/Crono';
import Register from '../Register/Register';

const Stack = createNativeStackNavigator();

export default function Navegator() {
  const auth = useSelector(({ loggedUser }) => loggedUser.isAuthenticated);
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
      >
        {!auth
          ? (
            <>
              <Stack.Screen
                name="Register"
                options={{
                  headerShown: false,
                }}
                component={Register}
              />
              <Stack.Screen
                name="Login"
                options={{
                  headerShown: false,
                }}
                component={Login}
              />
            </>
          ) : (
            <Stack.Screen
              name="Clock"
              options={{
                headerShown: false,
              }}
              component={MyTimer}
            />
          )}

      </Stack.Navigator>
    </NavigationContainer>

  );
}
