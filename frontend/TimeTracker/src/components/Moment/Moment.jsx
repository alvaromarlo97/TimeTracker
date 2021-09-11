/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import BackgroundTimer from 'react-native-background-timer';
import { SubmitTime } from '../../redux/actions/userCreators';
import styles from './moment.style';

export default function Moment({ setisStarted }) {
  const dispatch = useDispatch();
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [started, setStarted] = useState(false);
  const activityId = useSelector(({ loadActivity }) => loadActivity._id);
  // Runs when timerOn value changes to start or stop timer
  const clockify = () => {
    const hours = Math.floor(secondsLeft / 60 / 60);
    const mins = Math.floor((secondsLeft / 60) % 60);
    const seconds = Math.floor(secondsLeft % 60);
    const displayHours = hours < 10 ? `0${hours}` : hours;
    const displayMins = mins < 10 ? `0${mins}` : mins;
    const displaySecs = seconds < 10 ? `0${seconds}` : seconds;
    return {
      displayHours,
      displayMins,
      displaySecs,
    };
  };
  useEffect(() => {
    if (secondsLeft === 0) BackgroundTimer.stopBackgroundTimer();
  }, [secondsLeft]);
  const startTimer = () => {
    setisStarted(true);
    setStarted(true);
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft((secs) => {
        if (secs >= 0) return secs + 1;
        return 0;
      });
    }, 1000);
  };
  const activity = useSelector(({ loadActivity }) => loadActivity?.activityTime);
  const activitycolor = useSelector(({ loadActivity }) => loadActivity?.color);
  function timeCalculator() {
    const reducer = (a, b) => a + b;
    const hours = activity.map((e) => e.hours);
    const minutes = activity.map((e) => e.minutes);
    const seconds = activity.map((e) => e.seconds);
    const totalSeconds = seconds?.reduce(reducer, parseInt(clockify().displaySecs)) % 60;
    const acumulatedMinutes = Math.floor(seconds?.reduce(reducer, parseInt(clockify().displaySecs)) / 60);
    const totalMinutes = (minutes?.reduce(reducer, parseInt(clockify().displayMins)) + acumulatedMinutes) % 60;
    const acumulatedHours = Math.floor(totalMinutes / 60);
    const totalHours = (hours?.reduce(reducer, parseInt(clockify().displayHours))) + acumulatedHours;
    const newTotalTime = `${totalHours}:${totalMinutes}:${totalSeconds}`;
    return (newTotalTime);
  }
  const stopTimer = () => {
    dispatch(SubmitTime(activityId, {
      hours: clockify().displayHours,
      minutes: clockify().displayMins,
      seconds: clockify().displaySecs,
    }, timeCalculator()));
    setisStarted(false);
    setStarted(false);
    setSecondsLeft(0);

    BackgroundTimer.stopBackgroundTimer();
  };
  const backTime = useSelector(({ loadActivity }) => loadActivity?.totalTime);
  console.log(backTime);

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.time}>
        {' '}
        {clockify().displayHours}
        {' '}
        :
        {' '}
        {clockify().displayMins}
        {' '}
        :
        {' '}
        {clockify().displaySecs}
        {' '}

      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.start} disabled={started} onPress={() => startTimer()}>
          <Text style={styles.startText}>
            ▶
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.start} disabled={!started} onPress={() => stopTimer()}>
          <Text style={styles.startText}>
            ■
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ backgroundColor: '#262155' }}>

        {activity?.slice(0).reverse().map((element) => (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: activitycolor }]}
            key={element._id}
          >
            <Text style={styles.buttonTime}>
              {element.hours}
              :
              {element.minutes}
              :
              {element.seconds}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
