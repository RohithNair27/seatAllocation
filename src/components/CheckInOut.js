import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
function CheckInOut({enabled, toggleFuntion}) {
  return (
    <View style={styles.body}>
      <Text style={styles.Data}>Seat No: 123</Text>
      <Text style={styles.Data}>Cubicle: 6</Text>
      <Text style={styles.Data}>Zone: 10</Text>
      <Text style={styles.Data}>Timings: 10am - 9pm</Text>
      <Text style={styles.Data}>Date: 20/08/2023</Text>
      <View style={styles.toggleBody}>
        <Text style={styles.checkInText}>Check In</Text>
        <Switch
          value={enabled}
          onValueChange={() => toggleFuntion()}
          trackColor={{false: 'white', true: 'rgb(149,16,172)'}}
          style={styles.toggleButton}
          activeThumbColor="white"
          thumbColor={'rgb(149,16,172)'}
        />
        <Text style={styles.checkOutText}>Check Out</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f4e6f6',
  },
  Data: {
    fontSize: 18,
    fontWeight: 500,
    position: 'relative',
    left: '10%',
    margin: 3,
  },
  toggleBody: {
    flexDirection: 'row-reverse',
    right: '23%',
    top: '10%',
  },
  toggleButton: {
    height: 30,
  },
  checkOutText: {
    fontSize: 15,
    fontWeight: 800,
    right: '6%',
  },
  checkInText: {
    fontSize: 15,
    fontWeight: 800,
    left: '6%',
  },
});
export default CheckInOut;
