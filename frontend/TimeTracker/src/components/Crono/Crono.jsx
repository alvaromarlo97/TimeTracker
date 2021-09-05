/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  ScrollView,
  SafeAreaView,

} from 'react-native';
// import Clock from '../Clock/Clock';
import Moment from '../Moment/Moment';
import CurrentActivity from '../CurrentActivity/CurrentActivity';

export default function Crono() {
  return (
    <SafeAreaView style={{ backgroundColor: 'rgba(235,255,254,1)' }}>
      <ScrollView>
        <CurrentActivity />
        <Moment />
      </ScrollView>
    </SafeAreaView>
  );
}
