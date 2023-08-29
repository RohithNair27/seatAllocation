import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Animated} from 'react-native';
function ToggleButton() {
  const toggleWidth = useRef(new Animated.Value(0)).current;
  const [selected, setSelected] = useState(true);

  const onPressTrue = () => {
    Animated.spring(toggleWidth, {
      toValue: 62,
      duration: 600,
      useNativeDriver: true,
    }).start();

    setSelected(!selected);
  };
  const onPressFalse = () => {
    Animated.spring(toggleWidth, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();

    setSelected(!selected);
  };

  return (
    <Pressable
      style={selected ? styles.bodySelected : styles.body}
      onPress={selected ? () => onPressTrue() : () => onPressFalse()}>
      <Animated.View
        style={
          selected
            ? {
                ...styles.toggleSelected,
                transform: [{translateX: toggleWidth}],
              }
            : {
                ...styles.toggle,
                transform: [{translateX: toggleWidth}],
              }
        }></Animated.View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  body: {
    width: '40%',

    height: '80%',
    borderRadius: 25,
    justifyContent: 'center',
    padding: 3.5,
    backgroundColor: 'rgb(149,16,172)',
  },
  bodySelected: {
    width: '40%',

    height: '80%',
    borderRadius: 25,
    justifyContent: 'center',
    padding: 3.5,
    backgroundColor: 'white',
  },
  toggle: {
    position: 'relative',
    width: '30%',
    height: '100%',
    // borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  toggleSelected: {
    position: 'relative',
    width: '30%',
    height: '100%',
    // borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'rgb(149,16,172)',
  },
});
export default ToggleButton;
