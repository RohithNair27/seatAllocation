import React from 'react';
import {View, Text, StyleSheet, Pressable, Animated} from 'react-native';
function ToggleButton() {
  return (
    <Animated.View style={styles.body}>
      <Animated.View style={styles.toggle}></Animated.View>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  body: {
    width: '100%',
    borderWidth: 1,
    height: '80%',
    borderRadius: 20,
    justifyContent: 'center',
    padding: 3.5,
  },
  toggle: {
    width: '30%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 20,
  },
});
export default ToggleButton;
