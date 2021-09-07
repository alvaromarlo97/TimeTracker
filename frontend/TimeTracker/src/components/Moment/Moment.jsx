/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import BackgroundTimer from 'react-native-background-timer';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#000',
  },
  time: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  image: {
    marginTop: 100,
    width: 200,
    height: 200,
  },
  email: {
    fontFamily: 'arial',
    fontSize: 25,
    color: '#121212',
    height: 69,
    width: 263,
    backgroundColor: 'rgba(196,255,252,1)',
    textAlign: 'center',
    borderRadius: 25,
    marginTop: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5,

  },
  email1: {
    fontFamily: 'arial',
    fontSize: 25,
    color: '#121212',
    height: 69,
    width: 263,
    backgroundColor: 'rgba(196,255,252,1)',
    textAlign: 'center',
    borderRadius: 25,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5,

  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 69,
    backgroundColor: 'rgba(30,191,178,1)',
    borderRadius: 25,
    marginTop: 25,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5,

  },
  login: {
    fontFamily: 'arial',
    color: '#121212',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 30,
    marginTop: 8,
  },
});

export default function Moment({ setisStarted }) {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [started, setStarted] = useState(false);
  console.log(setisStarted);

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
  const stopTimer = () => {
    setisStarted(false);
    setStarted(false);
    BackgroundTimer.stopBackgroundTimer();
  };
  const clearTimer = () => {
    setStarted(false);
    setSecondsLeft(0);
  };
  const activity = useSelector(({ loadActivity }) => loadActivity?.activityTime);

  function log() {
    console.log(clockify().displayHours, clockify().displayMins, clockify().displaySecs);
  }
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
      <Button title="Start" disabled={started} onPress={() => startTimer()} />
      <Button title="console.log" onPress={() => log()} />
      <Button title="Stop tracking" disabled={!started} onPress={() => stopTimer()} />
      <Button title="Clear" disabled={started} onPress={() => clearTimer()} />
      {activity?.map((element) => (
        <TouchableOpacity style={styles.button} key={element._id}>
          <Text>
            {element.hours}
            :
            {element.minutes}
            :
            {element.seconds}
          </Text>
        </TouchableOpacity>
      ))}

    </SafeAreaView>
  );
}
