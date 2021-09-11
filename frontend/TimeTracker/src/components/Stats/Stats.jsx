/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import {
  VictoryBar, VictoryChart, VictoryPie, VictoryTheme,
} from 'victory-native';

const data = [
  { quarter: 'fff', earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262155',
  },
});

export default function Stats() {
  const activities = useSelector(({ loggedUser }) => loggedUser?.user?.activities);
  const name = activities?.map((element) => element.activityName);
  const totalTimes = activities?.map((element) => element.totalTime);
  // console.log(name);

  // console.log('p');
  const times = activities?.map((element) => element.activityTime);
  const seconds = times?.map((e) => e?.map((i) => i.seconds));
  //   console.log(seconds);
  //   console.log(colors);
  const separetedTimes = totalTimes?.map((e) => e?.split(':'));
  const totalHours = separetedTimes.map((e) => e[0]);
  const totalMinutes = separetedTimes.map((e) => e[1]);
  const totalSeconds = separetedTimes.map((e) => e[2]);
  const prueba = [['3', '30', '50'], ['6', '3', '45']];
  // console.log(prueba.reduce((a, b, index) => parseInt(a[index]) + parseInt(b[index])));
  const minutesToSecs = (separetedTimes.map((e) => e.map((i, index) => (index === 1 ? parseInt(i * 60) : parseInt(i)))));
  const hoursToSecs = (minutesToSecs.map((e) => e.map((i, index) => (index === 0 ? parseInt(i * 60 * 60) : parseInt(i)))));
  const total = hoursToSecs.map((e) => e.reduce((a, b) => a + b));
  console.log(total);

  return (
    <View style={styles.container}>

      <VictoryPie
        colorScale={activities?.map((element) => element.color)}
        labels={activities?.map((element) => element.activityName)}
        style={{
          data: {
            fillOpacity: 1, stroke: '#262155', strokeWidth: 2,
          },
          labels: {
            fontSize: 25, fill: 'white',
          },
        }}
        data={total}

      />
    </View>
  );
}
