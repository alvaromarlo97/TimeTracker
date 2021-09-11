/* eslint-disable radix */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import {
  VictoryBar, VictoryChart, VictoryPie, VictoryTheme,
} from 'victory-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262155',

  },

});

export default function Stats() {
  const activities = useSelector(({ loggedUser }) => loggedUser?.user?.activities);
  console.log('ii', activities?.map((element) => element));
  console.log(activities?.map((element) => element?.activityTime?.map((i, index) => i[index])));
  const totalTimes = activities?.map((element) => element.totalTime);

  const separetedTimes = totalTimes?.map((e) => e?.split(':'));

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
            fontSize: 15, fill: 'white',
          },
        }}
        data={total}
        width={300}
        labelRadius={({ innerRadius }) => innerRadius + 110}
      />
    </View>
  );
}
