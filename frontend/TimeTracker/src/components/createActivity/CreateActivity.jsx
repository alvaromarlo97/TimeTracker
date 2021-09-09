/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Text,

} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { CreateNewActivity } from '../../redux/actions/userCreators';
import styles from './CreateActivity.style';

export default function CreateActivity({ navigation }) {
  const dispatch = useDispatch();
  const [color, setcolor] = useState('#FF3B30');
  const [activityName, setActivityName] = useState('');
  const userId = useSelector(({ loggedUser }) => loggedUser?.user?._id);
  function submitActivity(name, co) {
    if (activityName) {
      dispatch(CreateNewActivity(userId, {
        activityName: name,
        color: co,
      }));
      navigation.pop();
    }
  }
  return (
    <ScrollView>
      <View style={styles.textContainer}>
        <TouchableOpacity style={[styles.selectedColor, { backgroundColor: color }]} />
        <TextInput
          placeholder="Activity Name"
          autoCorrect={false}
          autoCapitalize="words"
          style={styles.activity}
          onChangeText={(text) => setActivityName(text)}
          value={activityName}

        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => submitActivity(activityName, color)}>
        <Text>Save</Text>
      </TouchableOpacity>
      <View style={styles.colorContainer}>
        <TouchableOpacity style={styles.lemon} onPress={() => setcolor('#FF3B30')} />
        <TouchableOpacity style={styles.ny} onPress={() => setcolor('#FF9500')} />
        <TouchableOpacity style={styles.green} onPress={() => setcolor('#FFCC00')} />
        <TouchableOpacity style={styles.celeste} onPress={() => setcolor('#4CD964')} />
        <TouchableOpacity style={styles.crayola} onPress={() => setcolor('#5AC8FA')} />
        <TouchableOpacity style={styles.lavander} onPress={() => setcolor('#007AFF')} />
        <TouchableOpacity style={styles.candy} onPress={() => setcolor('#5856D6')} />
        <TouchableOpacity style={styles.pink} onPress={() => setcolor('#FF2D55')} />
      </View>
    </ScrollView>
  );
}
