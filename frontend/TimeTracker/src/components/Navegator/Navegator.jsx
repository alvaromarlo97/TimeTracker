import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login/Login';
import Register from '../Register/Register';
import MainAppNavegator from './MainAppNavegator';

export default function Navegator() {
  const Stack = createNativeStackNavigator();
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
              name="MainApp"
              options={{
                headerShown: false,
              }}
              component={MainAppNavegator}
            />

          )}

      </Stack.Navigator>

    </NavigationContainer>

  );
}
