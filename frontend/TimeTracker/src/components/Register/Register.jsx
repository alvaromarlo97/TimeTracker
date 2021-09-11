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
  const [nameRInputValue, setNameRInputValue] = useState('');
  const [emailRInputValue, setEmailRInputValue] = useState('');
  const [passwordRInputValue, setPasswordRInputValue] = useState('');

  function handleRegistation() {
    if (nameRInputValue && passwordRInputValue && emailRInputValue) {
      dispatch(RegisterUser({
        username: nameRInputValue,
        email: emailRInputValue,
        password: passwordRInputValue,
      }));
      navigation.push('Login');
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../public/image/timeOrange.png')} style={styles.image} />
      <TextInput
        placeholder="username"
        autoCorrect={false}
        autoCapitalize="words"
        style={styles.email}
        onChangeText={(text) => setNameRInputValue(text)}
        value={nameRInputValue}
      />
      <TextInput
        placeholder="email"
        autoCorrect={false}
        autoCapitalize="words"
        style={styles.email1}
        onChangeText={(text) => setEmailRInputValue(text)}
        value={emailRInputValue}
      />
      <TextInput
        placeholder="password"
        secureTextEntry
        style={styles.email1}
        onChangeText={(text) => setPasswordRInputValue(text)}
        value={passwordRInputValue}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegistation}>
        <Text style={styles.login}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.push('Login')}>
        <Text style={styles.login1}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
