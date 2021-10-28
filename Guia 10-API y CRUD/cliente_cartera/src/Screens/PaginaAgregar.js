import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';

export default function PaginaAgregar({navigation}) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [preciodeventa, setPreciodeventa] = useState('');
  const [preciodecosto, setPreciodecosto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [fotografia, setFotografia] = useState('');

  Guardar = () => {
    fetch(
      'https://guia10-vc190544.000webhostapp.com/api.php?comando=agregar&nombre=' +
        nombre +
        '&descripcion=' +
        descripcion +
        '&cantidad=' +
        cantidad +
        '&preciodecosto=' +
        preciodecosto +
        '&preciodeventa=' +
        preciodeventa +
        '&fotografia=' +
        fotografia,
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        const mensaje = responseJson.mensaje;
        console.log(mensaje);
        if (!mensaje) alert('Error al agregar!');
        else {
          alert(mensaje);
          navigation.goBack();
        }
      })
      .catch(error => {
        console.error(error);
        alert('Error de Internet!!');
      });
  };
  return (
    <View style={{flex: 1, padding: 20}}>
      <Input placeholder="Nombre" onChangeText={text => setNombre(text)} />
      <Input
        inputStyle={{marginTop: 10}}
        placeholder="Descripción"
        onChangeText={text => setDescripcion(text)}
      />
      <Input
        inputStyle={{marginTop: 10}}
        placeholder="Precio de costo"
        onChangeText={text => setPreciodecosto(text)}
      />
      <Input
        inputStyle={{marginTop: 10}}
        placeholder="Precio de venta"
        onChangeText={text => setPreciodeventa(text)}
      />
      <Input
        inputStyle={{marginTop: 10}}
        placeholder="Cantidad"
        onChangeText={text => setCantidad(text)}
      />
      <Input
        inputStyle={{marginTop: 10}}
        placeholder="URL de fotografía"
        onChangeText={text => setFotografia(text)}
      />
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
          Guardar();
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 22,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          Guardar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
