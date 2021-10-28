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

import PantallaInicio from './src/Navigation/PantallaInicio';
import listarProductos from './src/Navigation/listarProductos';

class PaginaDetalle extends Component {
  state = {
    nombre: '',
    descripcion: '',
    cantidad: '',
    preciodecosto: '',
    preciodeventa: '',
    fotografia: '',
    id: '',
  };
  static navigationOptions = {
    title: 'Editar producto',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  Actualizar() {
    fetch(
      'https://guia10-vc190544.000webhostapp.com/api.php?comando=editar&nombre=' +
        this.state.nombre +
        '&descripcion=' +
        this.state.descripcion +
        '&cantidad=' +
        this.state.cantidad +
        '&preciodecosto=' +
        this.state.preciodecosto +
        '&preciodeventa=' +
        this.state.preciodeventa +
        '&fotografia=' +
        this.state.fotografia +
        '&id=' +
        this.state.id,
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
          this.props.navigation.goBack();
        }
      })
      .catch(error => {
        console.error(error);
        alert('Error de Internet!!');
      });
  }
  Eliminar() {
    fetch(
      'https://guia10-vc190544.000webhostapp.com/api.php?comando=eliminar&id=' +
        this.state.id,
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
          this.props.navigation.goBack();
        }
      })
      .catch(error => {
        console.error(error);
        alert('Error de Internet!!');
      });
  }
  render() {
    const {navigation} = this.props;
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
                this.Actualizar();
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
                this.Eliminar();
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
            {
              (onWillFocus = () => {
                // Do your things here
                console.log('Entro aqui' + navigation.getParam('nombre'));
                this.setState({
                  nombre: navigation.getParam('nombre'),
                  descripcion: navigation.getParam('descripcion'),
                  cantidad: navigation.getParam('cantidad'),
                  preciodecosto: navigation.getParam('preciodecosto'),
                  preciodeventa: navigation.getParam('preciodeventa'),
                  fotografia: navigation.getParam('fotografia'),
                  id: navigation.getParam('id'),
                });
              })
            }
            <Input
              label="Nombre"
              value={this.state.nombre}
              placeholder="Nombre"
              onChangeText={text => this.setState({nombre: text})}
            />
            <Input
              label="Descripción"
              value={this.state.descripcion}
              inputStyle={{marginTop: 10}}
              placeholder="Descripción"
              onChangeText={text => this.setState({descripcion: text})}
            />
            <Input
              label="Precio de costo"
              value={this.state.preciodecosto}
              inputStyle={{marginTop: 10}}
              placeholder="Precio de costo"
              onChangeText={text => this.setState({preciodecosto: text})}
            />
            <Input
              label="Precio de venta"
              value={this.state.preciodeventa}
              inputStyle={{marginTop: 10}}
              placeholder="Precio de venta"
              onChangeText={text => this.setState({preciodeventa: text})}
            />
            <Input
              label="Cantidad"
              value={this.state.cantidad}
              inputStyle={{marginTop: 10}}
              placeholder="Cantidad"
              onChangeText={text => this.setState({cantidad: text})}
            />
            <Input
              label="Fotografía"
              value={this.state.fotografia}
              inputStyle={{marginTop: 10}}
              placeholder="URL de fotografía"
              onChangeText={text => this.setState({fotografia: text})}
            />
            <Image
              style={{width: 100, height: 100, alignSelf: 'center'}}
              source={{uri: this.state.fotografia}}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
class PaginaAgregar extends Component {
  state = {
    nombre: '',
    descripcion: '',
    preciodeventa: '',
    preciodecosto: '',
    cantidad: '',
    fotografia: '',
  };
  static navigationOptions = {
    title: 'Agregar producto',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  Guardar() {
    fetch(
      'https://guia10-vc190544.000webhostapp.com/api.php?comando=agregar&nombre=' +
        this.state.nombre +
        '&descripcion=' +
        this.state.descripcion +
        '&cantidad=' +
        this.state.cantidad +
        '&preciodecosto=' +
        this.state.preciodecosto +
        '&preciodeventa=' +
        this.state.preciodeventa +
        '&fotografia=' +
        this.state.fotografia,
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
          this.props.navigation.goBack();
        }
      })
      .catch(error => {
        console.error(error);
        alert('Error de Internet!!');
      });
  }
  render() {
    return (
      <View style={{flex: 1, padding: 20}}>
        <Input
          placeholder="Nombre"
          onChangeText={text => this.setState({nombre: text})}
        />
        <Input
          inputStyle={{marginTop: 10}}
          placeholder="Descripción"
          onChangeText={text => this.setState({descripcion: text})}
        />
        <Input
          inputStyle={{marginTop: 10}}
          placeholder="Precio de costo"
          onChangeText={text => this.setState({preciodecosto: text})}
        />
        <Input
          inputStyle={{marginTop: 10}}
          placeholder="Precio de venta"
          onChangeText={text => this.setState({preciodeventa: text})}
        />
        <Input
          inputStyle={{marginTop: 10}}
          placeholder="Cantidad"
          onChangeText={text => this.setState({cantidad: text})}
        />
        <Input
          inputStyle={{marginTop: 10}}
          placeholder="URL de fotografía"
          onChangeText={text => this.setState({fotografia: text})}
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
            this.Guardar();
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
}
const Stack = createStackNavigator();
/*{
    Inicio: PantallaInicio,
    ListarProductos: listarProductos,
    Detalles: PaginaDetalle,
    Agregar: PaginaAgregar,
  },
  {
    initialRouteName: 'Inicio',
  },*/

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={PantallaInicio} />
          <Stack.Screen
            name="Productos"
            component={listarProductos}
            options={{
              title: 'Productos',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name="Detalle" component={PaginaDetalle} />
          <Stack.Screen name="Agregar" component={PaginaAgregar} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
