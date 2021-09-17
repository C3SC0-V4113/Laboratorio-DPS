import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView,
  TextComponent,
} from 'react-native';
import {DefaultTheme, RadioButton, Text} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';
import colors from '../utils/colors';

const Formulario = ({
  reservaciones,
  setReservaciones,
  guardarMostrarForm,
  guardarReservacionesStorage,
}) => {
  //variables para el formulario
  const [cliente, guardarCliente] = useState('');
  const [fecha, guardarFecha] = useState('');
  const [hora, guardarHora] = useState('');
  const [clase, guardarClase] = useState('No Fumadores');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = date => {
    const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
    guardarFecha(date.toLocaleDateString('es-ES', opciones));
    hideDatePicker();
  };

  // Muestra u oculta el Time Picker
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const confirmarHora = hora => {
    const opciones = {hour: 'numeric', minute: '2-digit', hour12: false};
    guardarHora(hora.toLocaleString('es-ES', opciones));
    hideTimePicker();
  };

  // Crear nueva cita
  const crearNuevaReservacion = () => {
    // Validar
    if (
      cliente.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      clase.trim() === ''
    ) {
      // Falla la validación
      mostrarAlerta();
      return;
    }
    // Crear una nueva cita
    const reserva = {cliente, fecha, hora, clase};
    reserva.id = shortid.generate();
    // console.log(cita);
    // Agregar al state
    const reservasNuevo = [...reservaciones, reserva];
    setReservaciones(reservasNuevo);
    // Pasar las nuevas reservaciones a storage
    guardarReservacionesStorage(JSON.stringify(reservasNuevo));
    // Ocultar el formulario
    guardarMostrarForm(false);
    // Resetear el formulario
    guardarClase('');
    guardarCliente('');
    guardarHora('');
    guardarFecha('');
  };

  // Muestra la alerta si falla la validación
  const mostrarAlerta = () => {
    Alert.alert(
      'Error', // Titulo
      'Todos los campos son obligatorios', // mensaje
      [
        {
          text: 'OK', // Arreglo de botones
        },
      ],
    );
  };
  return (
    <>
      <ScrollView style={styles.formulario}>
        <View>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => guardarCliente(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Fecha:</Text>
          <Button title="Seleccionar Fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
            locale="es_ES"
            headerTextIOS="Elige la fecha"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{fecha}</Text>
        </View>
        <View>
          <Text style={styles.label}>Hora:</Text>
          <Button title="Seleccionar Hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={confirmarHora}
            onCancel={hideTimePicker}
            locale="es_ES"
            headerTextIOS="Elige una Hora"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{hora}</Text>
        </View>
        <View>
          <Text style={styles.label}>Síntomas:</Text>
          <RadioButton.Group
            onValueChange={nuevoReserv => guardarClase(nuevoReserv)}
            value={clase}>
            <View style={styles.row}>
              <RadioButton value="No Fumadores" />
              <Text style={styles.radTexto}>No Fumadores</Text>
            </View>
            <View style={styles.row}>
              <RadioButton value="Fumadores" />
              <Text style={styles.radTexto}>Fumadores</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => crearNuevaReservacion()}
            style={styles.btnSubmit}>
            <Text style={styles.textoSubmit}>Crear Nueva Reserva</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    color: 'black',
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: colors.BUTTON_COLOR,
    marginVertical: 10,
  },
  textoSubmit: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  radTexto: {
    marginTop: 8,
    flex: 1,
    alignItems: 'center',
  },
});
export default Formulario;
