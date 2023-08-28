import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import CheckInOut from '../components/CheckInOut';
import ZoneButton from '../components/ZoneButton';
import LayOut from '../components/LayOut';

function Home() {
  const [isEnable, setIsEnabled] = useState(true);
  const [modelEnabled, setModelEnabled] = useState(true);
  const [isZoneSeleted, setIsZoneSelected] = useState({
    zoneA: false,
    zoneB: false,
    zoneC: false,
  });

  function toggleFuntion() {
    setIsEnabled(!isEnable);
  }
  function closeModel() {
    setModelEnabled(false);
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
      <Text style={styles.seatAllocationText}>Seat Allocation</Text>
      <Text>Book your seats</Text>
      <Modal animationType="slide" transparent={true} visible={modelEnabled}>
        <View style={styles.modelView}>
          <CheckInOut
            enabled={isEnable}
            toggleFuntion={toggleFuntion}
            closeModel={closeModel}
          />
        </View>
      </Modal>

      <View style={styles.layout}>
        <LayOut />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  seatAllocationText: {
    color: 'rgb(149,16,172)',
    fontSize: 25,

    top: '2%',
    left: '4%',
  },
  checkInCard: {
    width: 10,
    height: 30,
    position: 'relative',
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

  modelView: {
    height: '40%',
    width: '70%',
    left: '15%',
    top: '15%',
  },
  layout: {
    position: 'absolute',
    left: '0%',
    top: '26%',
    width: '100%',
    height: '71%',
    overflow: 'hidden',
  },
});
export default Home;
