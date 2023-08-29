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
      <Text
        style={styles.deskText}>{`74 desks           3 seats avaiblable`}</Text>
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
    fontSize: 17,
    fontWeight: '700',
  },
  logOutHeaderImage: {
    padding: 7,
    height: '70%',
    backgroundColor: '#d1d1d1',
    width: '11%',
    borderRadius: 20,

    margin: 5,
  },
  deskText: {
    color: '#808080',
    fontWeight: '500',

    top: '5%',
    left: '3%',
  },
  images: {
    // borderWidth: 1,
    height: '45%',
    top: '13%',
    alignItems: 'center',
    left: '2%',
    flexDirection: 'row',
  },
  availableText: {
    left: '7%',
    fontWeight: 650,
    fontSize: 13,
  },
});
export default ZoneButton;
