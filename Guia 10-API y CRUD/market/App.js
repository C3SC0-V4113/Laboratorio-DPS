import React,{useState, Component} from 'react';
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
class PantallaInicio extends Component {
  state = {
    usuario: '',
    contrasena: '',
  };
  static navigationOptions = {
    header: null,
  };
  Entrar() {
    if (!!this.state.usuario && !!this.state.contrasena) {
      const url =
        'https://guia10-vc190544.000webhostapp.com/apiusuario.php?comando=autenticar&usuario=' +
        this.state.usuario +
        '&contrasena=' +
        this.state.contrasena;
      console.log(url);
      fetch(url,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
          
          response.json();
          console.log(response.json());
        })
        .then(data => {
          console.log(data);
          const encontrado = data.encontrado;
          // Alert("Mensaje="+mensaje);
          if (encontrado == 'si') {
            this.props.navigation.navigate('listarProductos');
            //navigation.navigate('listarProductos');
          } else {
            Alert.alert(
              'Usuario',
              'No encontrado!!',
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              {cancelable: false},
            );
          }
        })
        .catch(error => {
          console.error(error);
          Alert.alert(
            'Aviso',
            'Error de Internet!!',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          );
        });
    } else {
      Alert.alert(
        'Aviso',
        'No introdujo datos',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  }
  render() {
    return (
      <View style={{flex: 1, padding: 10}}>
        <Text style={{fontSize: 34, marginTop: 25, alignSelf: 'center'}}>
          Bienvenidos
        </Text>
        <Image
          style={{width: 200, height: 160, alignSelf: 'center', marginTop: 15}}
          source={require('./imagenes/market.jpg')}
        />
        <View style={{marginLeft: 10, marginRight: 10}}>
          <Input
            placeholder="USUARIO"
            onChangeText={text => this.setState({usuario: text})}
            rightIcon={<Icon name="user" size={24} color="black" />}
          />
          <Input
            placeholder="CONTRASEÑA"
            onChangeText={text => this.setState({contrasena: text})}
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
            this.Entrar();
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
}

class listarProductos extends Component {
  state = {
    elementos: [],
    total: 0,
  };
  static navigationOptions = {
    title: 'Productos',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  cargarRegistros() {
    console.log('Prueba');
    fetch('https://guia10-vc190544.000webhostapp.com/api.php?comando=listar', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        const listado = responseJson.records;
        console.log(listado);
        this.setState({
          elementos: listado,
          total: listado.length,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationEvents
          onWillFocus={() => {
            // Do your things here
            this.cargarRegistros();
          }}
        />
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            height: 40,
            marginTop: 10,
            backgroundColor: 'lightgray',
            textAlignVertical: 'center',
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
          }}>
          {this.state.total}
          productos
        </Text>
        <FlatList
          data={this.state.elementos}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.id}
              //onPress = {() => this.alertItemName(item)}
              onPress={() => this.props.navigation.navigate('Detalles', item)}>
              <View
                style={{flexDirection: 'row', marginTop: 15, marginLeft: 2}}>
                <Image
                  style={{width: 90, height: 90}}
                  source={{uri: item.fotografia}}
                />
                <View style={{height: 80, marginLeft: 5}}>
                  <Text style={{flex: 1, fontSize: 18}}>{item.nombre}</Text>
                  <Text style={{flex: 1, fontSize: 16, fontWeight: 'bold'}}>
                    ${item.preciodeventa}
                  </Text>
                  <Text style={{flex: 1, fontSize: 14}}>
                    Existencia {item.cantidad}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            position: 'absolute',
            bottom: 10,
            right: 10,
            height: 70,
            backgroundColor: 'red',
            borderRadius: 100,
          }}
          onPress={() => this.props.navigation.navigate('Agregar')}>
          <Icon name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}
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
            <NavigationEvents
              onWillFocus={() => {
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
              }}
            />
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
          <Stack.Screen name="Productos" component={listarProductos} />
          <Stack.Screen name="Detalle" component={PaginaDetalle} />
          <Stack.Screen name="Agregar" component={PaginaAgregar} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
