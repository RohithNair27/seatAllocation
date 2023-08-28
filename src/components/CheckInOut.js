import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Platform,
} from 'react-native';
import ToggleButton from './ToggleButton';
function CheckInOut({enabled, toggleFuntion, closeModel}) {
  return (
    <View style={styles.body}>
      <View style={styles.dataBody}>
        <Text>Seat Number</Text>
        <Text>Cublicale</Text>
        <Text>Zone</Text>
        <Text>Timings</Text>
        <Text>Date</Text>
      </View>
      <View style={styles.switchContainer}>
        {/* <Switch
          value={enabled}
          onValueChange={() => toggleFuntion()}
          trackColor={{false: 'white', true: 'rgb(149,16,172)'}}
          activeThumbColor="white"
          thumbColor={'rgb(149,16,172)'}
          barHeight={50}
        /> */}
        <ToggleButton />
      </View>
      {Platform.OS === 'web' ? null : (
        <TouchableOpacity
          style={styles.modelCloseButton}
          onPress={() => {
            closeModel();
          }}>
          <Text>X</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f4e6f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataBody: {
    position: 'absolute',
    // borderWidth: 1,
    width: '80%',
    height: '70%',
    top: '5%',
  },
  Data: {
    fontSize: 18,
    fontWeight: 500,
    position: 'relative',
    left: '10%',
    margin: 3,
  },
  switchContainer: {
    // borderWidth: 1,
    width: '30%',
    top: '30%',
    height: '20%',
    alignItems: 'center',
  },
  toggleButton: {
    top: '40%',
    ...Platform.select({
      web: {
        height: 30,
      },
      default: {},
    }),
  },
  modelCloseButton: {
    backgroundColor: 'red',
    position: 'relative',
    width: '20%',
    bottom: '51%',
    left: '39%',
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
