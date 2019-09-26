import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

// import { Container } from './styles';

export default function HomeScreen() {
  const [ userInfo, setUserInfo ] = useState("");

  useEffect(() => {
    async function getInfo() {
      const info = await AsyncStorage.getItem('@MyCefet:userInfo');
      console.log("HomeScreen")
      console.log(JSON.parse(info));
      setUserInfo(JSON.parse(info));
    }
    getInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        Ola,</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
