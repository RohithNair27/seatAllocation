import React, {useRef, useState} from 'react';
import {View, Text, Animated, TouchableOpacity, Platform} from 'react-native';
import image from '../../assets/officePlan.png';
function LayOut() {
  const [width] = useState(new Animated.Value(600));
  const [height] = useState(new Animated.Value(600));
  const [left] = useState(new Animated.Value(250));

  const onPress = () => {
    Animated.spring(width, {toValue: width._value + 100}).start();
    Animated.spring(height, {toValue: height._value + 100}).start();
  };

  const onPressDec = () => {
    Animated.spring(width, {toValue: width._value - 100}).start();
    Animated.spring(height, {toValue: height._value - 100}).start();
  };

  const onPressLeft = () => {
    Animated.spring(left, {toValue: left._value - 40}).start();
  };

  const onPressRight = () => {
    Animated.spring(left, {toValue: left._value + 40}).start();
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
            borderWidth: 1,
            position: 'absolute',
            bottom: '40%',
            left: '6%',
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            width: 15,
            borderRadius: 60,
            height: 15,
            borderWidth: 1,
            position: 'absolute',
            bottom: '60%',
            left: '6%',
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            width: 15,
            borderRadius: 60,
            height: 15,
            borderWidth: 1,
            position: 'absolute',
            bottom: '40%',
            left: '24%',
          }}></TouchableOpacity>
      </Animated.View>
      <View
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          // borderWidth: 1,
          width: '10%',
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
            right: 1,
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
            top: 100,
            left: 60,
            borderWidth: 1,
            width: 50,
            backgroundColor: '#e6e6e6',
          }}
          onPress={onPressLeft}>
          <Text style={{color: 'black'}}>Left</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 150,
            right: 60,
            borderWidth: 1,
            width: 50,
            backgroundColor: '#e6e6e6',
          }}
          onPress={onPressRight}>
          <Text style={{color: 'black'}}>Right</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LayOut;
