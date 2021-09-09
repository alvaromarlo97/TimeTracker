import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';

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
    backgroundColor: '#f5fcff',
  },
});

export default function Stats() {
  const activities = useSelector(({ loggedUser }) => loggedUser?.user?.activities);
  const name = activities?.map((element) => element.activityName);
  const colors = activities?.map((element) => element.color);
  // console.log(name);

  // console.log('p');
  const times = activities?.map((element) => element.activityTime);
  const seconds = times?.map((e) => e?.map((i) => i.seconds));
  //   console.log(seconds);
  //   console.log(colors);

  return (
    <View style={styles.container}>
      <VictoryChart width={350} theme={VictoryTheme.material}>
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    </View>
  );
}
