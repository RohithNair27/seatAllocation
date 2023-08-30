import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import SeatBooking from '../screens/SeatBooking';
import {View, Text, Platform} from 'react-native';
import CabinBooking from '../screens/CabinBooking';
import MeetingRoom from '../screens/MeetingRoom';
import VeiwLogs from '../screens/VeiwLogs';
const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: TabBarStyles,
        tabBarIconStyle: {display: 'none'},
        tabBarLabelStyle: tabBarLabelStyles,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelPosition: 'beside-icon',
        }}
      />
      <Tab.Screen
        name="SeatBooking"
        component={SeatBooking}
        options={{
          tabBarLabel: 'Seat Booking',
        }}
      />
      <Tab.Screen
        name="CabinBooking"
        component={CabinBooking}
        options={{
          tabBarLabel: 'Cabin Booking',
        }}
      />
      <Tab.Screen
        name="MeetingRoom"
        component={MeetingRoom}
        options={{
          tabBarLabel: 'Meeting Room Booking',
        }}
      />
    </Tab.Navigator>
  );
}
const TabBarStyles = {
  ...Platform.select({
    web: {
      position: 'absolute',
      top: '11%',
      backgroundColor: '#f4e6f6',
      width: '95%',
      left: '2%',
      height: '9%',
    },
    default: {
      position: 'absolute',
      backgroundColor: '#f4e6f6',
      width: '90%',
      height: '7%',
      bottom: '5%',
      left: '4%',
      alignItems: 'center',
      borderRadius: 10,
    },
  }),
};
const tabBarLabelStyles = {
  ...Platform.select({
    web: {
      fontSize: 23,
      right: 30,
      color: 'black',
      fontWeight: 500,
    },
    default: {
      fontSize: 15,
      color: 'black',
      fontWeight: 500,
    },
  }),
};
export default BottomNavigator;
