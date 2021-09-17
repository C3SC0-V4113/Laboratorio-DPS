import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Librarie{´ps/NewAppScreen';

const Reservacion = ({item, eliminarReserva}) => {
  const dialogoEliminar = id => {
    console.log('eliminando....', id);
    eliminarReserva(id);
  };
  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Nombre: </Text>
        <Text style={styles.texto}>{item.cliente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Clase: </Text>
        <Text style={styles.texto}>{item.clase}</Text>
      </View>
      <View>
        <Text style={styles.label}>Fecha: </Text>
        <Text style={styles.texto}>{item.hora}</Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => dialogoEliminar(item.id)}
          style={styles.btnEliminar}>
          <Text style={styles.textoEliminar}> Eliminar &times; </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  texto: {
    fontSize: 18,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  textoEliminar: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Reservacion;
