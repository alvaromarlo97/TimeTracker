/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadCurrentActivity, deleteActivity } from '../../redux/actions/userCreators';
import styles from './activities.style';

export default function Activities({ navigation }) {
  const dispatch = useDispatch();

  function setActivity(activityId) {
    dispatch(loadCurrentActivity({
      currentActivityId: activityId,
    }));

    navigation.navigate('MyTimer');
  }
  const currentUserId = useSelector(({ loggedUser }) => loggedUser?.user?._id);
  const activities = useSelector(({ loggedUser }) => loggedUser?.user?.activities);
  function removeActivity(activityId) {
    dispatch(deleteActivity(currentUserId, {
      activities: [activityId],
    }));
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.addActivity}
        onPress={() => navigation.push('CreateAct')}
      >
        <Text>Add Activity</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              <TouchableOpacity
                style={styles.x}
                onPress={() => removeActivity(element._id)}
              />
            </TouchableOpacity>
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
