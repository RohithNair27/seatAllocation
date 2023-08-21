import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
function TextBar({placeHolder}) {
  return (
    <TextInput placeholder={placeHolder} style={styles.textInput}></TextInput>
  );
}
const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
});
export default TextBar;
