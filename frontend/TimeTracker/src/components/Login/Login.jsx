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
import styles from './login.style';
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
      <Image source={require('../../public/image/sandclock.png')} style={styles.image} />
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
      <TouchableOpacity onPress={() => navigation.push('Clock')}>
        <Text style={styles.login}>boton</Text>
      </TouchableOpacity>
    </View>
  );
}
