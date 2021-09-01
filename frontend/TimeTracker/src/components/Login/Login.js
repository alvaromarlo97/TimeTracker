import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <TextInput placeholder="email" style={styles.email}></TextInput>
      <TextInput placeholder="password" style={styles.email1}></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(235,255,254,1)",
    borderRadius: 25
  },
  email: {
    fontFamily: "arial",
    color: "#121212",
    height: 69,
    width: 263,
    backgroundColor: "rgba(196,255,252,1)",
    textAlign: "center",
    borderRadius: 25,
    marginTop: 315,
    marginLeft: 47
  },
  email1: {
    fontFamily: "arial",
    color: "#121212",
    height: 69,
    width: 263,
    backgroundColor: "rgba(196,255,252,1)",
    textAlign: "center",
    borderRadius: 25,
    marginTop: 22,
    marginLeft: 47
  },
  button: {
    width: 175,
    height: 69,
    backgroundColor: "rgba(30,191,178,1)",
    borderRadius: 25,
    marginTop: 86,
    marginLeft: 91,
  },
  login: {
    fontFamily: "arial",
    color: "#121212",
    textAlign: "center",
    fontSize: 46,
    marginTop: 8,
    marginLeft: 31
  }
});

export default Login;
