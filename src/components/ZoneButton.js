import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function ZoneButton({zoneText, selectZone, zone}) {
  return (
    <TouchableOpacity
      style={zone ? styles.bodySelected : styles.body}
      onPress={() => {
        selectZone(zoneText);
      }}>
      <Text style={styles.zoneText}>{zoneText}</Text>
      <Text style={styles.deskText}>{`74 desks  3 seats avaiblable`}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#e6e6e6',
    width: '100%',
    height: '100%',
  },
  bodySelected: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  zoneText: {
    fontWeight: 700,
    fontSize: 20,
    left: '3%',
  },
  deskText: {
    color: '#A9A9A9',
    fontSize: 15,
    fontWeight: 500,
    left: '3%',
  },
});
export default ZoneButton;
