/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './login.style';
import logInUser from '../../redux/actions/userCreators';

export default function Login() {
  const dispatch = useDispatch();
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');

  function handleLogin() {
    dispatch(logInUser({
      email: emailInputValue,
      password: passwordInputValue,
    }));
  }

  console.log(emailInputValue);
  console.log(passwordInputValue);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="email"
        style={styles.email}
        onChangeText={(text) => setEmailInputValue(text)}
        value={emailInputValue}
      />
      <TextInput
        placeholder="password"
        style={styles.email1}
        onChangeText={(text) => setPasswordInputValue(text)}
        value={passwordInputValue}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
