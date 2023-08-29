import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Platform,
  Pressable,
} from 'react-native';
import ToggleButton from './ToggleButton';
function CheckInOut({enabled, toggleFuntion, closeModel}) {
  return (
    <View style={styles.body}>
      <View style={styles.dataBody}>
        <Text style={styles.Data}>
          Seat Number: <Text style={styles.Value}>WS2</Text>
        </Text>
        <Text style={styles.Data}>
          Cublicale: <Text style={styles.Value}>1</Text>
        </Text>
        <Text style={styles.Data}>
          Zone: <Text style={styles.Value}>C</Text>
        </Text>
        <Text style={styles.Data}>
          Timings: <Text style={styles.Value}>10AM - 6PM</Text>
        </Text>
        <Text style={styles.Data}>
          Date: <Text style={styles.Value}>30/09/2023</Text>
        </Text>
      </View>
      <Pressable style={styles.cancelButton}>
        <Text style={styles.cancelText}>Cancel</Text>
      </Pressable>
      <View style={styles.switchContainer}>
        <Text style={{...styles.checkInText, right: '5%'}}>Check In</Text>
        <ToggleButton />
        <Text style={{...styles.checkInText, left: '5%'}}>Check out</Text>
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

    width: '80%',
    height: '60%',
    top: '5%',
  },
  Data: {
    fontSize: 13,
    fontWeight: 700,

    margin: 3,
  },
  Value: {
    fontSize: 13,
    fontWeight: 450,

    margin: 3,
  },
  switchContainer: {
    // borderWidth: 1,
    width: '80%',
    top: '28%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cancelButton: {
    position: 'relative',
    left: '30%',
    bottom: '25%',
    borderWidth: 1,
    width: '30%',
    height: '13%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'orange',
    backgroundColor: 'white',
  },
  cancelText: {
    color: 'orange',
    fontWeight: 600,
  },
  modelCloseButton: {
    backgroundColor: 'red',
    position: 'relative',
    width: '20%',
    bottom: '51%',
    left: '39%',
  },

  checkInText: {
    fontSize: 16,
    fontWeight: 650,
  },
});
export default CheckInOut;
