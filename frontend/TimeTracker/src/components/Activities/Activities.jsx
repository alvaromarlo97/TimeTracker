/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './activities.style';

export default function Activities() {
  const activities = useSelector(({ loggedUser }) => loggedUser.user.activities[0].activityName);
  console.log(activities);
  return (
    <View style={styles.container}>
      <Text>
        {activities }
      </Text>
    </View>
  );
}
