/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  View,
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
    navigation.push('MyTimer');
  }
  const activities = useSelector(({ loggedUser }) => loggedUser.user.activities);
  console.log(activities);
  return (
    <View style={styles.container}>
      {activities.map((element) => (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setActivity(element._id)}
            key={element._id}
          >
            { console.log(element.activityName)}
            <Text>
              {element.activityName}
            </Text>
          </TouchableOpacity>
        </>
      ))}

    </View>
  );
}
