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
import styles from './register.style';
import { RegisterUser } from '../../redux/actions/userCreators';
// import store from '../../redux/store';

export default function Register({ navigation }) {
  const dispatch = useDispatch();
  const [nameInputValue, setNameInputValue] = useState('');
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');

  function handleRegistation() {
    dispatch(RegisterUser({
      username: nameInputValue,
      email: emailInputValue,
      password: passwordInputValue,
    }));
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../public/image/sandclock.png')} style={styles.image} />
      <TextInput
        placeholder="username"
        autoCorrect={false}
        autoCapitalize="words"
        style={styles.email}
        onChangeText={(text) => setNameInputValue(text)}
        value={nameInputValue}
      />
      <TextInput
        placeholder="email"
        autoCorrect={false}
        autoCapitalize="words"
        style={styles.email1}
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
      <TouchableOpacity style={styles.button} onPress={handleRegistation}>
        <Text style={styles.login}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.push('Login')}>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
