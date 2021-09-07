import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './Clock.style';

export default class StopWatch extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      timer: null,
      hours_Counter:'00',
      minutes_Counter: '59',
      seconds_Counter: '55',
      startDisable: false
    }
  }
 
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
 
  onButtonStart = () => {
 
    let timer = setInterval(() => {
 
      let num = (Number(this.state.seconds_Counter) + 1).toString(),
        count = this.state.minutes_Counter;
        hour=this.state.hours_Counter;

      if (Number(this.state.seconds_Counter) === 59) {
        count = (Number(this.state.minutes_Counter) + 1).toString();
        num = '00';
        if(Number(this.state.minutes_Counter) === 59) {
          hour = (Number(this.state.hours_Counter) + 1).toString();
          num = '00';
          count='00'
        }
      }
 
      this.setState({
        hours_Counter: hour.length == 1 ? '0' + hour : hour,
        minutes_Counter: count.length == 1 ? '0' + count : count,
        seconds_Counter: num.length == 1 ? '0' + num : num
      });
    }, 1000);
    this.setState({ timer });
 
    this.setState({startDisable : true})
  }
 
 
  onButtonStop = () => {
    console.log(this.state)
    clearInterval(this.state.timer);
    this.setState({startDisable : false})
  }
 
 
  onButtonClear = () => {
    this.setState({
      timer: null,
      hours_Counter: '00',
      minutes_Counter: '00',
      seconds_Counter: '00',
    });
  }
 
  render() {
 
    return (
      <SafeAreaView style={styles.MainContainer}>
 
        <Text style={styles.counterText}>{this.state.hours_Counter} :{this.state.minutes_Counter} : {this.state.seconds_Counter}</Text>
 
        <TouchableOpacity
          onPress={this.onButtonStart}
          activeOpacity={0.6}
          style={[styles.button, { backgroundColor: this.state.startDisable ? '#B0BEC5' : '#FF6F00' }]} 
          disabled={this.state.startDisable} >
 
          <Text style={styles.buttonText}>START</Text>
 
        </TouchableOpacity>
 
        <TouchableOpacity
          onPress={this.onButtonStop}
          activeOpacity={0.6}
          style={[styles.button]} >
 
          <Text style={styles.buttonText}>STOP</Text>
 
        </TouchableOpacity>
 
        <TouchableOpacity
          onPress={this.onButtonClear}
          activeOpacity={0.6}
          style={[styles.button, { backgroundColor: this.state.startDisable ? '#B0BEC5' : '#FF6F00' }]} 
          disabled={this.state.startDisable} >
 
          <Text style={styles.buttonText}> CLEAR </Text>
 
        </TouchableOpacity>
     
        
 
      </SafeAreaView>
 
    );
  }
}
 
 
 