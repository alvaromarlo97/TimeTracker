/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import styles from '../Register/register.style';
import logInUser from '../../redux/actions/userCreators';
// import store from '../../redux/store';

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');

  function handleLogin() {
    dispatch(logInUser({
      email: emailInputValue,
      password: passwordInputValue,
    }));
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../public/image/timeOrange.png')} style={styles.image} />
      <TextInput
        placeholder="email"
        autoCorrect={false}
        autoCapitalize="words"
        style={styles.email}
        onChangeText={(text) => setEmailInputValue(text)}
        value={emailInputValue}
      />
      <TextInput
        placeholder="password"
        secureTextEntry
        style={styles.email1}
        onChangeText={(text) => setPasswordInputValue(text)}
        value={passwordInputValue}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.pop()}>
        <Text style={styles.login}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
