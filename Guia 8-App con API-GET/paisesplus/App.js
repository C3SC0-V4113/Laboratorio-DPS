/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// npx react-native run-android
// npx @react-native-community/cli doctor
//expo start --clear
//keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
  Alert,
} from 'react-native';

import {Picker} from '@react-native-community/picker';

import Pais from './src/components/Pais';

export default function App() {
  const [busqueda, guardaBusqueda] = useState({pais: ''});
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [bandera, guardarBandera]=useState('https://www.countryflags.io/sv/flat/64.png');

  useEffect(() => {
    const {pais} = busqueda;
    const consultarPais = async () => {
      if (consultar) {
        console.log({pais});
        const url = `https://servicodados.ibge.gov.br/api/v1/paises/${pais}`;
        const urlbandera=`https://www.countryflags.io/${pais}/flat/64.png`;
        guardarBandera(urlbandera);
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarResultado(resultado);
          guardarConsultar(false);
        } catch (error) {
          mostrarAlerta();
        }
      }
    };
    consultarPais();
  }, [consultar]);

  const mostrarAlerta = () => {
    Alert.alert('Error', 'No hay resultado intenta con otra ciudad o país'),
      [{Text: 'Ok'}];
  };

  const {pais} = busqueda;
  const [animacionboton] = useState(new Animated.Value(1));

  const consultarPais = () => {
    if (pais.trim() === '') {
      mostrarAlertaPick();
      return;
    }
    //Consultar API
    guardarConsultar(true);
  };

  const mostrarAlertaPick = () => {
    Alert.alert('Error', 'Debe seleccionar un país'), [{Text: 'Entendido'}];
  };

  const animacionEntrada = () => {
    Animated.spring(animacionboton, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const animacionSalida = () => {
    Animated.spring(animacionboton, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const estiloAnimacion = {
    transform: [
      {
        scale: animacionboton,
      },
    ],
  };

  return (
    <View style={styles.app}>
      <View style={styles.contenido}>
        <>
          <View>
            <View>
              <Text style={styles.input}>Pais</Text>
            </View>
            <View>
              <Picker
                selectedValue={pais}
                onValueChange={pais => {
                  consultarPais();
                  guardaBusqueda({...busqueda, pais});
                }}
                style={styles.itempais}>
                <Picker.Item label="--seleccione un pais--" value="" />
                <Picker.Item label="Canada" value="ca" />
                <Picker.Item label="El Salvador" value="sv" />
                <Picker.Item label="Guatemala" value="gt" />
                <Picker.Item label="Honduras" value="hn" />
                <Picker.Item label="Nicaragua" value="ni" />
                <Picker.Item label="Panama" value="pa" />
                <Picker.Item label="Costa Rica" value="cr" />
                <Picker.Item label="Mexico" value="mx" />
                <Picker.Item label="Argentina" value="ar" />
                <Picker.Item label="Estados Unidos" value="us" />
                <Picker.Item label="Colombia" value="co" />
                <Picker.Item label="España" value="es" />
                <Picker.Item label="Peru" value="pe" />
              </Picker>
            </View>
            <TouchableWithoutFeedback
              onPressIn={() => animacionEntrada()}
              onPressOut={() => animacionSalida()}>
              <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
                <Text style={styles.textoBuscar}>Buscar País</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </>
        <Pais bandera={bandera} resultado={resultado} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71,149,212)',
    justifyContent: 'center',
  },
  contenido: {
    margin: '2.5%',
  },
  input: {
    padding: 10,
    height: 50,
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  itempais: {
    height: 60,
    backgroundColor: '#fff',
  },
  btnBuscar: {
    marginTop: 50,
    height: 50,
    backgroundColor: '#000',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  textoBuscar: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
  },
});
