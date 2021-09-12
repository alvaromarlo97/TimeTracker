/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadCurrentActivity, deleteActivity, logOutUser } from '../../redux/actions/userCreators';
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
      <View style={styles.header}>
        <Text style={styles.MyActivities}>MyActivities</Text>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => dispatch(logOutUser())}
        >
          <Image source={require('../../public/image/logout.png')} style={styles.logout} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {activities.reverse().map((element) => (
          <>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: element.color }]}
              onPress={() => setActivity(element._id)}
              key={element._id}
            >
              <View style={styles.info}>
                <Text key={element} style={styles.text}>
                  {element.activityName}
                </Text>
                <Text style={styles.totalTime}>

                  {element.totalTime}

                </Text>
                <TouchableOpacity
                  style={styles.x}
                  onPress={() => removeActivity(element._id)}
                >
                  <Text style={styles.xText}>x</Text>
                </TouchableOpacity>
              </View>

            </TouchableOpacity>
          </>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.addActivity}
        onPress={() => navigation.push('CreateAct')}
      >
        <Text style={styles.addText}>
          +

        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
