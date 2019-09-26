import React, { useState }  from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import LoginService from '../services/sigaa/LoginService'

import BGLoginForm from '../assets/BGLoginForm.png'
import Logo from '../assets/Logo_CEFET-MG.png'

// import { Container } from './styles';

export default function LoginScreen({ navigation }) {

  const [user, setUser] = useState('11083137603');
  const [password, setPassword] = useState('Hei22897913tor');
  const [loading, setLoading] = useState(false);

  async function handlerLogin(){
    setLoading(true);
    const response = await LoginService(user, password)
    //console.log(response);

    // if(response === 200) {
    //   try {
    //     await AsyncStorage.setItem('@MyCefet:userInfo', JSON.stringify(response.data));
    //     await AsyncStorage.setItem('@MyCefet:logged', 'true');
    //     console.log("deu bom");
    //   } catch (error) {
    //     console.log("deu ruim");
    //   }
    //   navigation.navigate('Dashboard');
    // }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={Logo}></Image>
      </View>

      <ImageBackground style={styles.formContainer} source={BGLoginForm}>
        <TextInput
          placeholder="Usuario"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="decimal-pad"
          style={styles.input}
          value={user}
          onChangeText={setUser}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={handlerLogin} style={styles.button}>
          {
            loading === false
            ?
            (<Text style={styles.buttonText}>Entrar</Text>)
            :
            <ActivityIndicator size="large" color="#FFF"/>
          }
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    paddingVertical: 40,
  },
  logoImage: {
    height: 200,
    resizeMode: 'contain'
  },
  formContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    resizeMode: 'contain',
    paddingHorizontal: 64
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    marginTop: 20,
    paddingHorizontal: 30
  },
  button: {
    flexDirection: 'row',
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#086DAD',
    borderRadius: 12,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16
  }
});
