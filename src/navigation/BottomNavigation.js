import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import SeatBooking from '../screens/SeatBooking';
import {View, Text} from 'react-native';
import CabinBooking from '../screens/CabinBooking';
import MeetingRoom from '../screens/MeetingRoom';
import VeiwLogs from '../screens/VeiwLogs';
const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          top: '12%',
          backgroundColor: '#f4e6f6',
          width: '95%',
          left: '2%',
          height: '12%',
        },

        tabBarLabelStyle: {
          fontSize: 25,
          color: 'black',
          fontWeight: 600,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="SeatBooking"
        component={SeatBooking}
        options={{
          tabBarLabel: 'Seat Booking',
        }}
      />
      {/* <Tab.Screen
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
      <Tab.Screen
        name="VeiwLogs"
        component={VeiwLogs}
        options={{
          tabBarLabel: 'View Logs',
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default BottomNavigator;
