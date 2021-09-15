/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './currentActivities.style';

export default function CurrentActivity() {
  const activity = useSelector(({ loadActivity }) => loadActivity?.activityTime);

  return (
    <SafeAreaView style={styles.container}>

      {activity?.map((element) => (
        <TouchableOpacity style={styles.button} key={element._id}>
          <Text>{element.hours}</Text>
        </TouchableOpacity>
      ))}

    </SafeAreaView>
  );
}
