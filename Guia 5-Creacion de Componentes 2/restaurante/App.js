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
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  useColorScheme,
  View,
} from 'react-native';
import {AsyncStorageStatic} from 'react-native';
import Reservacion from './src/components/Reservacion'
import Formulario from './src/components/Formulario';

const App=()=>{
  //definir el state de las reservaciones
  const [reservaciones,setReservaciones]=useState([]);
  const [mostrarform,guardarMostrarForm]=useState(false);

  useEffect(()=>{
    const obtenerReservacionesStorage=async()=>{
      try {
        const reservacionesStorage=await AsyncStorageStatic.getItem('reservaciones');
        if (reservacionesStorage) {
          setReservaciones(JSON.parse(reservacionesStorage));
        }
      } catch (error) {
        console.log(error);
      }
    };
    obtenerReservacionesStorage();
  },[]);

  //Eliminar los clientes del state
  const eliminarCliente=id=>{
    const reservasFiltradas=reservaciones.filter(reserva=>reserva.id!==id);
    setReservaciones(reservasFiltradas);
    guardarReservacionesStorage(JSON.stringify(citasFiltradas));
  };

  //Muestra u oculta el Formulario
  const mostrarFormulario=()=>{
    guardarMostrarForm(!mostrarform);
  };

  //Ocultar el teclado
  const cerrarTeclado=()=>{
    Keyboard.dismiss();
  };

  //Almacenar las resrvaciones en storage
  guardarReservacionesStorage=async reservaJSON=>{
    try {
      await AsyncStorageStatic.setItem('reservaciones',reservaJSON);
    } catch (error) {
      console.log(error);
    }
  };
  return(
    <TouchableWithoutFeedback onPress={()=>cerrarTeclado}>
      <View>
        <Text>Administrador de Reservaciones</Text>
        <View>
          <TouchableHighlight
            onPress={()=>mostrarFormulario()}
          >
            <Text>
              {' '}
              {mostrarform ? 'Cancelar Crear Reservación':'Crear Nueva Reservacion'}{' '}
            </Text>
          </TouchableHighlight>
        </View>
        <View>
          {
            mostrarform ? (
              <>
                <Text>Crear Nueva Reservación</Text>
                <Formulario/>
              </>
            ):(
              <>
                <Text>
                  {' '}
                  {
                    reservaciones.length>0
                    ? 'Administra tus reservaciones'
                    : 'No hay Reservaciones, agrega una'
                  }
                  {' '}
                </Text>
                <FlatList
                data={reservaciones}
                renderItem={({item})=>(
                  <Reservacion/>
                )}
                keyExtractor={cita=>cita.id}
                />
              </>
            )
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};

export default App;