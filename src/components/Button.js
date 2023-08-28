import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';

function Button({placeHolder, navigate}) {
  return (
    <Pressable
      style={styles.body}
      onPress={() => {
        navigate();
      }}>
      <Text style={styles.buttonText}>{placeHolder}</Text>
    </Pressable>
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
