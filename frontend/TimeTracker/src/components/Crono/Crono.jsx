/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  ScrollView,

} from 'react-native';
// import Clock from '../Clock/Clock';
import Moment from '../Moment/Moment';
// import CurrentActivity from '../CurrentActivity/CurrentActivity';

export default function Crono({ setisStarted }) {
  return (

    <ScrollView bounces={false} style={{ backgroundColor: '#000' }}>
      <Moment setisStarted={setisStarted} />
    </ScrollView>
  );
}
