import React, {useRef, useState} from 'react';
import {View, Text, Animated, TouchableOpacity, Platform} from 'react-native';
import image from '../../assets/officePlan.png';
function LayOut() {
  let width;
  let height;
  let left;
  if (Platform.OS === 'web') {
    width = useRef(new Animated.Value(400)).current;
    height = useRef(new Animated.Value(400)).current;
    left = useRef(new Animated.Value(250)).current;
  } else {
    width = useRef(new Animated.Value(300)).current;
    height = useRef(new Animated.Value(300)).current;
    left = useRef(new Animated.Value(20)).current;
  }

  const onPress = () => {
    Animated.spring(width, {
      toValue: width._value + 100,
      useNativeDriver: false,
    }).start();
    Animated.spring(height, {
      toValue: height._value + 100,
      useNativeDriver: false,
    }).start();
  };

  const onPressDec = () => {
    Animated.spring(width, {
      toValue: width._value - 100,
      useNativeDriver: false,
    }).start();
    Animated.spring(height, {
      toValue: height._value - 100,
      useNativeDriver: false,
    }).start();
  };

  const onPressLeft = () => {
    Animated.spring(left, {
      toValue: left._value - 40,
      useNativeDriver: false,
    }).start();
  };

  const onPressRight = () => {
    Animated.spring(left, {
      toValue: left._value + 40,
      useNativeDriver: false,
    }).start();
  };

  const os = Platform.OS;
  return (
    <View>
      <Animated.View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          width: width,
          height: height,
          transform: [{translateX: left}, {translateY: 0}],
        }}>
        {os === 'web' && (
          <Animated.Image
            source={{uri: image}}
            style={{
              resizeMode: 'contain',
              width: width,
              height: height,
            }}
          />
        )}
        {os === 'android' && (
          <Animated.Image
            source={require('../../assets/officePlan.png')}
            style={{
              resizeMode: 'contain',
              width: width,
              height: height,
            }}
          />
        )}

        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            width: 15,
            borderRadius: 60,
            height: 15,
            // borderWidth: 1,
            position: 'absolute',
            bottom: '40%',
            left: '8%',
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            width: 15,
            borderRadius: 60,
            height: 15,
            borderWidth: 1,
            position: 'absolute',
            bottom: '57%',
            left: '9%',
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            width: 15,
            borderRadius: 60,
            height: 15,

            position: 'absolute',
            bottom: '40%',
            left: '24%',
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width: 15,
            borderRadius: 60,
            height: 15,

            position: 'absolute',
            bottom: '57%',
            left: '24%',
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width: 15,
            borderRadius: 60,
            height: 15,

            position: 'absolute',
            bottom: '57%',
            left: '38%',
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            width: 15,
            borderRadius: 60,
            height: 15,

            position: 'absolute',
            bottom: '40%',
            left: '38%',
          }}></TouchableOpacity>
      </Animated.View>
      <View
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',

          width: '5%',
          height: '40%',
          right: '0%',
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            right: '1%',
            width: 30,
            height: 30,
            backgroundColor: '#e6e6e6',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onPress}>
          <Text style={{color: 'black'}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: '1%',
            width: 30,
            height: 30,
            top: 40,
            backgroundColor: '#e6e6e6',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onPressDec}>
          <Text style={{color: 'black'}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 80,
            right: '1%',
            width: 30,
            height: 30,
            backgroundColor: '#e6e6e6',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onPressLeft}>
          <Text style={{color: 'black'}}>{'<-'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 120,
            right: '1%',
            width: 30,
            height: 30,
            backgroundColor: '#e6e6e6',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onPressRight}>
          <Text style={{color: 'black'}}>{'->'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LayOut;
