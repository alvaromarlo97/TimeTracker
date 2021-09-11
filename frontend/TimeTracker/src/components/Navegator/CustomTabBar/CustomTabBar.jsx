/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,

} from 'react-native';

const styles = StyleSheet.create({

  TabBarMainContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#262155',
    height: 90,
    flexDirection: 'row',
    width: '100%',
  },

  button: {
    borderRadius: 50,
    marginBottom: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  image: {
    width: 72,
    height: 72,
  },

});

export default function CustomTabBar(props) {
  const navigateToFirstScreen = () => {
    props.navigation.navigate('ActivityNavegator');
  };

  const navigateToSecondScreen = () => {
    props.navigation.navigate('MyTimer');
  };

  const navigateToThirdScreen = () => {
    props.navigation.navigate('Stats');
  };

  return (

    <View style={[styles.TabBarMainContainer, props.isStarted && { display: 'none' }]}>

      <TouchableOpacity
        onPress={navigateToFirstScreen}
        activeOpacity={0.6}
        style={[styles.button, props.state.index === 0 && { backgroundColor: '#FD9F32' }]}
      >
        <Image source={require('../../../public/image/list.png')} style={styles.image} />

      </TouchableOpacity>

      <View />

      <TouchableOpacity
        onPress={navigateToSecondScreen}
        activeOpacity={0.6}
        style={[styles.button, props.state.index === 1 && { backgroundColor: '#FD9F32' }]}
      >
        <Image source={require('../../../public/image/clock.png')} style={styles.image} />
      </TouchableOpacity>
      <View />

      <TouchableOpacity
        onPress={navigateToThirdScreen}
        activeOpacity={0.6}
        style={[styles.button, props.state.index === 2 && { backgroundColor: '#FD9F32' }]}
      >

        <Image source={require('../../../public/image/line-chart.png')} style={styles.image} />

      </TouchableOpacity>

    </View>
  );
}
