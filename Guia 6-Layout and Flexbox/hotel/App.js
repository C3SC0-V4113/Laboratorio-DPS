import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';
const App = () => {
  const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
  const [modalVisibleMonta, setmodalVisibleMonta] = useState(false);
  const [modalVisibleCity, setmodalVisibleCity] = useState(false);
  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleplaya}
          onRequestClose={() => {
            alert('Modal ha sido cerrado.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text>
                Hermosos Hoteles con habitaciones de 1 a 2 camas con vista al mar y restaurantes lujosos
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleplaya(!modalVisibleplaya);
                }}></Button>
            </View>
          </View>
        </Modal>

        <View style={{flexDirection: 'row'}}>
          <Image style={styles.banner} source={require('./src/img/bg.jpg')} />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Hoteles de Playa</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleplaya(!modalVisibleplaya);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/hab-1.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleplaya(!modalVisibleplaya);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/hab-2.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleplaya(!modalVisibleplaya);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/hab-3.jpg')}
                />
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>



        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleMonta}
          onRequestClose={() => {
            alert('Modal ha sido cerrado.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la montaña</Text>
              <Text>
                Sitios reconfortantes con increibles vistas y alta privacidad
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setmodalVisibleMonta(!modalVisibleMonta);
                }}></Button>
            </View>
          </View>
        </Modal>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Hoteles de Montaña</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setmodalVisibleMonta(!modalVisibleMonta);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/hab-4.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setmodalVisibleMonta(!modalVisibleMonta);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/hab-5.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setmodalVisibleMonta(!modalVisibleMonta);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/hab-6.jpg')}
                />
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>





        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleCity}
          onRequestClose={() => {
            alert('Modal ha sido cerrado.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la ciudad</Text>
              <Text>
                Hoteles cercanos a todo lo que necesitas, en medio de una ciudad, pero aislados para eliminar cualquier molestia externa
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setmodalVisibleCity(!modalVisibleCity);
                }}></Button>
            </View>
          </View>
        </Modal>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Hoteles de Ciudad</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setmodalVisibleCity(!modalVisibleCity);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/hab-7.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setmodalVisibleCity(!modalVisibleCity);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/hab-8.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setmodalVisibleCity(!modalVisibleCity);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/hab-9.jpg')}
                />
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listadoItem: {
    flexBasis: '49%',
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },
});
export default App;
