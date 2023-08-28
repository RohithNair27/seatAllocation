import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import image from '../../assets/personIcon.png';
function ZoneButton({zoneText, selectZone, zone}) {
  return (
    <TouchableOpacity
      style={zone ? styles.bodySelected : styles.body}
      onPress={() => {
        selectZone(zoneText);
      }}>
      <Text style={styles.zoneText}>{zoneText}</Text>
      <Text style={styles.deskText}>{`74 desks  3 seats avaiblable`}</Text>
      <View style={styles.images}>
        <View style={styles.logOutHeaderImage}>
          <Image
            source={{uri: image}}
            style={{resizeMode: 'contain', height: '100%'}}
          />
        </View>
        <View style={styles.logOutHeaderImage}>
          <Image
            source={{uri: image}}
            style={{resizeMode: 'contain', height: '100%'}}
          />
        </View>
        <View style={styles.logOutHeaderImage}>
          <Image
            source={{uri: image}}
            style={{resizeMode: 'contain', height: '100%'}}
          />
        </View>
        <Text style={styles.availableText}>+68 available</Text>
      </View>
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
    left: '3%',
    fontWeight: '800',
  },
  logOutHeaderImage: {
    padding: 10,
    height: '90%',
    backgroundColor: '#d1d1d1',
    width: '15%',
    borderRadius: 50,
    left: '5%',
    margin: 2,
    bottom: '10%',
  },
  deskText: {
    color: '#A9A9A9',
    fontWeight: '700',
    top: '5%',
    left: '3%',
  },
  images: {
    // borderWidth: 1,
    height: '50%',
    top: '14%',
    flexDirection: 'row',
  },
  availableText: {
    left: '10%',
    top: '20%',
  },
});
export default ZoneButton;
