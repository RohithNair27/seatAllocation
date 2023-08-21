import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function Button({placeHolder, navigate}) {
  return (
    <TouchableOpacity
      style={styles.body}
      onPress={() => {
        navigate();
      }}>
      <Text style={styles.buttonText}>{placeHolder}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
export default Button;
