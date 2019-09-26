import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Logo from '../assets/Logo_CEFET-MG.png';

// import { Container } from './styles';

export default function AuthLoadingScreen(props) {

  useEffect(() => {
    var logged = null;
    async function checkLogged() {
      logged = await AsyncStorage.getItem('@MyCefet:logged');
    }
    checkLogged();
    props.navigation.navigate(logged ? 'Dashboard' : 'Login');
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo}/>
      <ActivityIndicator color='#00386A' size='large'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});
