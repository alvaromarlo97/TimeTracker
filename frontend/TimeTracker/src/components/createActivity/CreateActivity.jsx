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
  const [color, setcolor] = useState('#EE6055');
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
        <TouchableOpacity style={styles.maya} onPress={() => setcolor('#7CC6FE')} />
        <TouchableOpacity style={styles.blue} onPress={() => setcolor('#717EC3')} />
        <TouchableOpacity style={styles.green} onPress={() => setcolor('#AAF683')} />
        <TouchableOpacity style={styles.aquamarine} onPress={() => setcolor('#60D394')} />
        <TouchableOpacity style={styles.vivid} onPress={() => setcolor('#FF9B85')} />
        <TouchableOpacity style={styles.yellow} onPress={() => setcolor('#FFD97D')} />
        <TouchableOpacity style={styles.rose} onPress={() => setcolor('#F9E0D9')} />
        <TouchableOpacity style={styles.claret} onPress={() => setcolor('#7D1538')} />
      </View>
    </ScrollView>
  );
}
