import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import CheckInOut from '../components/CheckInOut';
import ZoneButton from '../components/ZoneButton';
import LayOut from '../components/LayOut';
import image from '../../assets/personIcon.png';
import icon from '../../assets/AppIcon.png';
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
      <View style={styles.headingText}>
        <Text style={styles.seatAllocationText}>Seat Allocation</Text>
        <Text style={styles.seatAllocationText2}>Book your seats</Text>
        <Image
          source={{uri: icon}}
          style={{
            resizeMode: 'contain',
            height: '100%',
            right: '70%',
            bottom: '90%',
          }}
        />
      </View>
      <View style={styles.logOutHeader}>
        <Text style={styles.logOutWelcomeText}>Welcome Rohith K!</Text>
        <TouchableOpacity style={styles.logOutHeaderImage}>
          <Image
            source={{uri: image}}
            style={{resizeMode: 'contain', height: '100%'}}
          />
        </TouchableOpacity>
      </View>
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
    fontWeight: 600,
  },
  seatAllocationText2: {
    fontWeight: '500',
  },
  headingText: {
    width: '15%',
    left: '10%',
    top: '2%',
  },

  logOutHeader: {
    height: '10%',
    bottom: '5%',
    left: '77%',
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logOutWelcomeText: {fontWeight: '650', fontSize: 16, left: '18%'},
  logOutHeaderImage: {
    padding: 10,
    height: '60%',
    backgroundColor: '#e6e6e6',
    width: '15%',
    borderRadius: 50,
    left: '30%',
  },

  checkInCard: {
    width: '20%',
    height: '28%',
    position: 'absolute',
    left: '2%',
    top: '21%',
    backgroundColor: '#f4e6f6',
  },
  zoneCardBody: {
    position: 'absolute',
    height: '48%',
    width: '20%',

    left: '2%',
    top: '50%',
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
