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
function CheckInOut({closeModel}) {
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

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataBody: {
    ...Platform.select({
      web: {
        position: 'absolute',

        width: '80%',
        height: '60%',
        top: '5%',
      },
      default: {
        position: 'absolute',
        // borderWidth: 1,
        width: '80%',
        height: '60%',
        top: '10%',
      },
    }),
  },
  Data: {
    ...Platform.select({
      web: {
        fontSize: 15,
        fontWeight: '700',
        color: 'black',
        margin: 3,
      },
      default: {
        fontSize: 15,
        fontWeight: '700',
        color: 'black',
        margin: 3,
      },
    }),
  },
  Value: {
    ...Platform.select({
      web: {
        fontSize: 13,
        fontWeight: '400',
        margin: 3,
      },
      default: {
        fontSize: 13,
        fontWeight: '400',
        margin: 3,
      },
    }),
  },
  switchContainer: {
    ...Platform.select({
      web: {
        width: '80%',
        top: '28%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      default: {
        // borderWidth: 1,
        width: '80%',
        top: '30%',
        height: '13%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
    }),
  },
  cancelButton: {
    position: 'relative',
    left: '30%',
    bottom: '22%',
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
    fontWeight: '600',
  },
  modelCloseButton: {
    backgroundColor: 'red',
    position: 'relative',
    width: '10%',
    bottom: '60%',
    left: '39%',
  },

  checkInText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});
export default CheckInOut;
