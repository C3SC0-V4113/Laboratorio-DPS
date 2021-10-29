import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PantallaInicio({navigation}) {
  const [usuario, guardarUsuario] = useState('');
  const [contrasena, guardarContrasena] = useState('');

  Entrar = async () => {
    try {
      if (!!usuario && !!contrasena) {
        const url =
          'https://guia10-vc190544.000webhostapp.com/apiusuario.php?comando=autenticar&usuario=' +
          usuario +
          '&contrasena=' +
          contrasena;

        console.log(url);
        const respuesta = await fetch(url);
        const resultax = await respuesta.json();
        console.log(resultax);
        const encontrado = resultax.encontrado;
        if (encontrado == 'si') {
          console.log('Logeado!!');
          navigation.navigate('Clientes');
        } else {
          Alert.alert(
            'Usuario',
            'No encontrado!!',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          );
        }
      } else {
        Alert.alert(
          'Aviso',
          'No introdujo datos',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        'Aviso',
        'Error de Internet!!',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };
  return (
    <View style={{flex: 1, padding: 10}}>
      <Text
        style={{
          fontSize: 34,
          marginTop: 25,
          alignSelf: 'center',
          color: 'black',
        }}>
        Bienvenidos
      </Text>
      <Image
        style={{
          width: 200,
          height: 160,
          alignSelf: 'center',
          marginTop: 15,
        }}
        source={require('../../imagenes/client.png')}
      />
      <View style={{marginLeft: 10, marginRight: 10}}>
        <Input
          placeholder="USUARIO"
          onChangeText={text => guardarUsuario(text)}
          rightIcon={<Icon name="user" size={24} color="black" />}
        />
        <Input
          placeholder="CONTRASEÑA"
          onChangeText={text => guardarContrasena(text)}
          secureTextEntry={true}
          rightIcon={<Icon name="lock" size={24} color="black" />}
        />
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: 'red',
          marginTop: 15,
          borderRadius: 5,
          justifyContent: 'center',
          marginLeft: 20,
          marginRight: 20,
        }}
        onPress={() => {
          Entrar();
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 22,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
