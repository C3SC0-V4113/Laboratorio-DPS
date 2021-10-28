import React, {useState, Component, useEffect} from 'react';
import {
  SafeAreaView,
  Button,
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  Alert,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
//import {createAppContainer, NavigationEvents} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PaginaDetalle({navigation,route}) {
     const producto=route.params.item;
  console.log('Hola Mundo desde main');
  console.log(producto);
  const [id, setId] = useState(producto.id);
  const [nombre, setNombre] = useState(producto.nombre);
  const [descripcion, setDescripcion] = useState(producto.descripcion);
  const [preciodeventa, setPreciodeventa] = useState(producto.preciodeventa);
  const [preciodecosto, setPreciodecosto] = useState(producto.preciodecosto);
  const [cantidad, setCantidad] = useState(producto.cantidad);
  const [fotografia, setFotografia] = useState(producto.fotografia);
 

  Actualizar = () => {
    fetch(
      'https://guia10-vc190544.000webhostapp.com/api.php?comando=editar&nombre=' +
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
        fotografia +
        '&id=' +
        id,
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        const mensaje = responseJson.mensaje;
        console.log(mensaje);
        if (!mensaje) alert('Error al actualizar!');
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
  Eliminar = () => {
    fetch(
      'https://guia10-vc190544.000webhostapp.com/api.php?comando=eliminar&id=' +
        id,
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        const mensaje = responseJson.mensaje;
        console.log(mensaje);
        if (!mensaje) alert('Error al eliminar!');
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
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            height: 60,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 40,
              backgroundColor: 'black',
              borderRadius: 5,
              justifyContent: 'center',
              marginLeft: 5,
            }}
            onPress={() => {
              Actualizar();
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                textAlign: 'center',
                textAlignVertical: 'center',
                padding: 3,
              }}>
              Actualizar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 40,
              backgroundColor: 'black',
              borderRadius: 5,
              justifyContent: 'center',
              marginLeft: 5,
              marginRight: 5,
            }}
            onPress={() => {
              Eliminar();
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                textAlign: 'center',
                textAlignVertical: 'center',
                padding: 3,
              }}>
              Eliminar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, padding: 20}}>

          <Input
            label="Nombre"
            value={nombre}
            placeholder="Nombre"
            onChangeText={text => setNombre(text)}
          />
          <Input
            label="Descripción"
            value={descripcion}
            inputStyle={{marginTop: 10}}
            placeholder="Descripción"
            onChangeText={text => setDescripcion(text)}
          />
          <Input
            label="Precio de costo"
            value={preciodecosto}
            inputStyle={{marginTop: 10}}
            placeholder="Precio de costo"
            onChangeText={text => setPreciodecosto(text)}
          />
          <Input
            label="Precio de venta"
            value={preciodeventa}
            inputStyle={{marginTop: 10}}
            placeholder="Precio de venta"
            onChangeText={text => setPreciodeventa(text)}
          />
          <Input
            label="Cantidad"
            value={cantidad}
            inputStyle={{marginTop: 10}}
            placeholder="Cantidad"
            onChangeText={text => setCantidad(text)}
          />
          <Input
            label="Fotografía"
            value={fotografia}
            inputStyle={{marginTop: 10}}
            placeholder="URL de fotografía"
            onChangeText={text => setFotografia(text)}
          />
          <Image
            style={{width: 100, height: 100, alignSelf: 'center'}}
            source={{uri: fotografia}}
          />
        </View>
      </ScrollView>
    </View>
  );
}
