/* eslint-disable no-underscore-dangle */
/* eslint-disable radix */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  StyleSheet, View, Text, ScrollView,
} from 'react-native';
import {
  VictoryPie,
} from 'victory-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262155',

  },
  ball: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  leyend: {
    display: 'flex',
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

});

export default function Stats() {
  const activities = useSelector(({ loggedUser }) => loggedUser?.user?.activities);
  const totalTimes = activities?.map((element) => element.totalTime);
  const separetedTimes = totalTimes?.map((e) => e?.split(':'));
  const minutesToSecs = (separetedTimes?.map((e) => e.map((i, index) => (index === 1 ? parseInt(i * 60) : parseInt(i)))));
  const hoursToSecs = (minutesToSecs?.map((e) => e.map((i, index) => (index === 0 ? parseInt(i * 60 * 60) : parseInt(i)))));
  const total = hoursToSecs?.map((e) => e.reduce((a, b) => a + b));

  return (
    <View style={styles.container}>

      <VictoryPie
        colorScale={activities?.map((element) => element.color)}
        labels={activities?.map((element) => element.activityName)}
        style={{
          data: {
            fillOpacity: 1, stroke: '#262155', strokeWidth: 0,
          },
          labels: {
            fontSize: 15, fill: 'white',
          },
        }}
        data={total}
        width={300}
        labelRadius={({ innerRadius }) => innerRadius + 110}
      />
      <ScrollView>
        {activities?.map((element) => (
          <View key={element._id} style={styles.leyend}>
            <View style={[styles.ball, { backgroundColor: element.color }]} />
            <Text style={{
              fontSize: 20,
              color: '#FCFFFF',
              fontFamily: 'Avenir-Medium',
            }}
            >
              {element.activityName}
              {'     '}
              {element.totalTime}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
