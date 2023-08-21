import React from 'react';

import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
function App(): JSX.Element {
  const linking = {
    prefixes: ['http://seatAllocation/'],
    config: {
      screens: {
        Login: '',
        Home: 'Home',
        SeatBooking: 'SeatBooking',
      },
    },
  };

  return (
    <SafeAreaView style={{height: '100%'}}>
      <NavigationContainer linking={linking}>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
