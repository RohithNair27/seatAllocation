import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TextBar from '../components/TextBar';
import Button from '../components/Button';
function Login({navigation}) {
  const [details, setDetails] = useState({
    email: '',
    password: '',
  });

  const navigationFuntions = () => {
    navigation.navigate('BottomNavigator');
  };
  return (
    <View style={styles.body}>
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
        <TouchableOpacity style={styles.forgetPasswordContiner}>
          <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
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
    width: '50%',
    height: '60%',
    backgroundColor: 'white',
  },
  loginText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  loginTextBarContainer: {
    height: '45%',

    position: 'relative',
    top: '10%',
    width: '65%',
    left: '17%',
  },
  textBarEmail: {
    height: '22%',
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'light-gray',
  },
  textBarPassword: {
    height: '22%',
    backgroundColor: 'white',

    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'light-gray',
  },
  buttons: {
    position: 'relative',
    top: '12%',
    width: '60%',
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
    left: '17%',
  },
  logInButton: {
    width: '30%',
    height: '70%',

    borderRadius: 4,
    backgroundColor: '#3f53d9',
  },
  ClearButton: {
    width: '30%',
    height: '70%',
    left: '6%',
    borderRadius: 4,
    backgroundColor: '#3f53d9',
  },
  forgetPasswordContiner: {
    position: 'relative',
    top: '20%',
    left: '38%',
  },
  forgetPasswordText: {
    color: '#1E90FF',
    fontSize: 20,
  },
});
export default Login;
