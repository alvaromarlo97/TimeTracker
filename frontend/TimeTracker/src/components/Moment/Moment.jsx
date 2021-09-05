import React, { useState } from 'react';
import {

  Text,

} from 'react-native';
import moment from 'moment';

export default function Moment() {
  const [time, setTime] = useState(moment().startOf('h').fromNow());
  return (
    <Text>
      {time}
    </Text>
  );
}
