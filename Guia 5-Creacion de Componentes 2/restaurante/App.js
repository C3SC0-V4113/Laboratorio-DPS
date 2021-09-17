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
import Reservacion from './src/components/Reservacion';
import Formulario from './src/components/Formulario';
import colors from './src/utils/colors';

const App = () => {
  //definir el state de las reservaciones
  const [reservaciones, setReservaciones] = useState([]);
  const [mostrarform, guardarMostrarForm] = useState(false);

  useEffect(() => {
    const obtenerReservacionesStorage = async () => {
      try {
        const reservacionesStorage = await AsyncStorageStatic.getItem(
          'reservaciones',
        );
        if (reservacionesStorage) {
          setReservaciones(JSON.parse(reservacionesStorage));
        }
      } catch (error) {
        console.log(error);
      }
    };
    obtenerReservacionesStorage();
  }, []);

  //Eliminar los clientes del state
  const eliminarCliente = id => {
    const reservasFiltradas = reservaciones.filter(
      reserva => reserva.id !== id,
    );
    setReservaciones(reservasFiltradas);
    guardarReservacionesStorage(JSON.stringify(reservasFiltradas));
  };

  //Muestra u oculta el Formulario
  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarform);
  };

  //Ocultar el teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  //Almacenar las resrvaciones en storage
  guardarReservacionesStorage = async reservaJSON => {
    try {
      await AsyncStorageStatic.setItem('reservaciones', reservaJSON);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Reservaciones</Text>
        <View>
          <TouchableHighlight
            style={styles.btnMostrarForm}
            onPress={() => mostrarFormulario()}>
            <Text style={styles.textoMostrarForm}>
              {mostrarform
                ? 'Cancelar Crear Reservación'
                : 'Crear Nueva Reservacion'}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.contenido}>
          {mostrarform ? (
            <>
              <Text style={styles.titulo}>Crear Nueva Reservación</Text>
              <Formulario
                reservaciones={reservaciones}
                setReservaciones={setReservaciones}
                guardarMostrarForm={guardarMostrarForm}
                guardarReservacionesStorage={guardarReservacionesStorage}
              />
            </>
          ) : (
            <>
              <Text style={styles.titulo}>
                {' '}
                {reservaciones.length > 0
                  ? 'Administra tus reservaciones'
                  : 'No hay Reservaciones, agrega una'}{' '}
              </Text>
              <FlatList
                style={styles.listado}
                data={reservaciones}
                renderItem={({item}) => (
                  <Reservacion item={item} eliminarReserva={eliminarCliente} />
                )}
                keyExtractor={reservacion => reservacion.id}
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: colors.PRIMARY_COLOR,
    flex: 1,
  },
  titulo: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: colors.BUTTON_COLOR,
    marginVertical: 10,
  },
  textoMostrarForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
