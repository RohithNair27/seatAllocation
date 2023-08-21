import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CheckInOut from '../components/CheckInOut';
import ZoneButton from '../components/ZoneButton';
import LayOut from '../components/LayOut';
import Icon from 'react-native-vector-icons/Ionicons';
function Home() {
  const [isEnable, setIsEnabled] = useState(true);
  const [isZoneSeleted, setIsZoneSelected] = useState({
    zoneA: false,
    zoneB: false,
    zoneC: false,
  });

  function toggleFuntion() {
    setIsEnabled(!isEnable);
  }

  function selectZone(zone) {
    if (zone === 'ZoneA') {
      setIsZoneSelected({
        ...isZoneSeleted,
        zoneA: !isZoneSeleted.zoneA,
        zoneB: false,
        zoneC: false,
      });
    } else if (zone === 'ZoneB') {
      setIsZoneSelected({
        ...isZoneSeleted,
        zoneB: !isZoneSeleted.zoneB,
        zoneA: false,
        zoneC: false,
      });
    }
    if (zone === 'ZoneC') {
      setIsZoneSelected({
        ...isZoneSeleted,
        zoneC: !isZoneSeleted.zoneC,
        zoneA: false,
        zoneB: false,
      });
    }

    console.log(isZoneSeleted);
  }
  return (
    <View style={styles.body}>
      <Icon name="person-circle" size={100} color="black" />
      <Text style={styles.seatAllocationText}>Seat Allocation</Text>
      <View style={styles.checkInCard}>
        <CheckInOut enabled={isEnable} toggleFuntion={toggleFuntion} />
      </View>
      <View style={styles.zoneCardBody}>
        <View style={styles.zoneCard1}>
          <ZoneButton
            zoneText="ZoneA"
            zone={isZoneSeleted.zoneA}
            selectZone={selectZone}
            toggleFuntion={toggleFuntion}
          />
        </View>
        <View style={styles.zoneCard2}>
          <ZoneButton
            zoneText="ZoneB"
            selectZone={selectZone}
            zone={isZoneSeleted.zoneB}
            toggleFuntion={toggleFuntion}
          />
        </View>
        <View style={styles.zoneCard3}>
          <ZoneButton
            zoneText="ZoneC"
            selectZone={selectZone}
            zone={isZoneSeleted.zoneC}
            toggleFuntion={toggleFuntion}
          />
        </View>
      </View>
      <View style={styles.layout}>
        <LayOut />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  seatAllocationText: {
    color: 'rgb(149,16,172)',
    fontSize: 25,
    fontWeight: 500,
    top: '2%',
    left: '4%',
  },
  checkInCard: {
    width: '20%',
    height: '30%',
    position: 'absolute',
    left: '2%',
    top: '25%',
  },
  zoneCardBody: {
    position: 'absolute',
    height: '40%',
    width: '20%',

    left: '2%',
    top: '57%',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#e6e6e6',
  },
  zoneCard1: {
    width: '100%',
    height: '33.5%',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  zoneCard2: {
    width: '100%',
    height: '33.5%',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  zoneCard3: {
    width: '100%',
    height: '33%',

    paddingTop: 10,
    paddingBottom: 10,
  },
  layout: {
    position: 'absolute',
    left: '22%',
    top: '26%',
    width: '75%',
    height: '71%',
    overflow: 'hidden',
  },
});
export default Home;
