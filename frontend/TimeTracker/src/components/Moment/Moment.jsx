import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
} from 'react-native';
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
});

export default function Background() {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [started, setStarted] = useState(false);

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
    setStarted(true);
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft((secs) => {
        if (secs >= 0) return secs + 1;
        return 0;
      });
    }, 1000);
  };
  const stopTimer = () => {
    setStarted(false);
    BackgroundTimer.stopBackgroundTimer();
  };
  const clearTimer = () => {
    setStarted(false);
    setSecondsLeft(0);
  };

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
      <Button title="Stop" disabled={!started} onPress={() => stopTimer()} />
      <Button title="Clear" disabled={started} onPress={() => clearTimer()} />

    </SafeAreaView>
  );
}
