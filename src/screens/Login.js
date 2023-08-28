import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
  StatusBar,
  Pressable,
} from 'react-native';
import TextBar from '../components/TextBar';
import Button from '../components/Button';
function Login({navigation}) {
  let windowWidth = Dimensions.get('window').width;
  let windowHeight = Dimensions.get('window').height;
  const [details, setDetails] = useState({
    email: '',
    password: '',
  });

  const navigationFuntions = () => {
    navigation.navigate('BottomNavigator');
  };

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={'#f4f4f4'} hidden={false} />
      <View style={styles.card}>
        <View style={styles.loginTextBarContainer}>
          <Text style={styles.loginText}>Log In</Text>
          <View style={styles.textBarEmail}>
            <TextBar placeHolder="Enter email address" />
          </View>
          <View style={styles.textBarPassword}>
            <TextBar placeHolder="Enter password" />
          </View>
        </View>
        <View style={styles.buttons}>
          <View style={styles.logInButton}>
            <Button placeHolder="Log In" navigate={navigationFuntions} />
          </View>
          <View style={styles.ClearButton}>
            <Button placeHolder="Clear" />
          </View>
        </View>
        <Pressable style={styles.forgetPasswordContiner}>
          <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  card: {
    ...Platform.select({
      web: {
        width: '50%',
        height: '60%',
        backgroundColor: 'white',
      },
      default: {
        width: '100%',
        height: '100%',
      },
    }),
  },
  loginText: {
    ...Platform.select({
      web: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 25,
      },
      default: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 25,
        color: 'black',
      },
    }),
  },
  loginTextBarContainer: {
    ...Platform.select({
      web: {
        height: '45%',
        position: 'relative',
        top: '10%',
        width: '65%',
        left: '17%',
      },
      default: {
        // borderWidth: 1,
        position: 'absoute',
        height: '30%',
        width: '70%',
        left: '15%',
        top: '22%',
      },
    }),
  },
  textBarEmail: {
    height: '25%',
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 4,

    borderColor: 'light-gray',
    ...Platform.select({
      web: {
        borderWidth: 1,
      },
    }),
  },
  textBarPassword: {
    height: '25%',
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: 'light-gray',
    ...Platform.select({
      web: {
        borderWidth: 1,
      },
    }),
  },
  buttons: {
    ...Platform.select({
      web: {
        position: 'relative',
        top: '12%',
        width: '60%',
        flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center',
        height: '15%',
        left: '17%',
      },
      default: {
        position: 'relative',
        top: '50%',
        width: '80%',
        flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        left: '5%',
      },
    }),
  },
  logInButton: {
    width: '40%',
    height: '60%',

    borderRadius: 4,
    backgroundColor: '#3f53d9',
  },
  ClearButton: {
    width: '40%',
    height: '60%',
    left: '6%',
    borderRadius: 4,
    backgroundColor: '#3f53d9',
  },
  forgetPasswordContiner: {
    ...Platform.select({
      web: {
        position: 'relative',
        top: '20%',
        left: '40%',
      },
      default: {
        position: 'relative',
        top: '35%',
        left: '31%',
      },
    }),
  },
  forgetPasswordText: {
    color: '#1E90FF',
    fontSize: 20,
  },
});
export default Login;
