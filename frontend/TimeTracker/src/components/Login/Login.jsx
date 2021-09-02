import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './login.style';

export default function Login() {
  const [textInputValue, setTextInputValue] = useState('');
  console.log(textInputValue);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="email"
        style={styles.email}
        onChangeText={(text) => setTextInputValue(text)}
        value={textInputValue}
      />
      <TextInput placeholder="password" style={styles.email1} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
