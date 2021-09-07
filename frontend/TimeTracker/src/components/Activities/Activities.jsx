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
import { useSelector, useDispatch } from 'react-redux';
import { loadActivity } from '../../redux/actions/userCreators';
import styles from './activities.style';

export default function Activities({ navigation }) {
  const dispatch = useDispatch();

  function setActivity(activityId) {
    dispatch(loadActivity({
      currentActivityId: activityId,

    }));
    navigation.navigate('MyTimer');
  }
  const activities = useSelector(({ loggedUser }) => loggedUser?.user?.activities);
  return (
    <SafeAreaView style={styles.container}>
      {activities.map((element) => (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setActivity(element._id)}
            key={element._id}
          >
            <Text key={element}>
              {element.activityName}
            </Text>
          </TouchableOpacity>
        </>
      ))}

    </SafeAreaView>
  );
}
