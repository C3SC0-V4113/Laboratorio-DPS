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

// npx react-native run-android
// npx @react-native-community/cli doctor
//expo start --clear
//keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

const App = () => {
  const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
  const [modalVisiblepupusas, setModalVisiblepupusas] = useState(false);
  const [modalVisibleFlores, setModalVisibleFlores] = useState(false);
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
                El Salvador cuenta con hermosas playas a niver Centroaméricano
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
          <Text style={styles.titulo}>Que hacer en El Salvador</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleplaya(!modalVisibleplaya);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/actividad-1.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad-2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad-3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad-4.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad-5.jpg')}
              />
            </View>
          </ScrollView>
        </View>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblepupusas}
          onRequestClose={() => {
            alert('Modal ha sido cerrado.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Comer Pupusas</Text>
              <Text>La delicia culinaria de unas pupusas</Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisiblepupusas(!modalVisiblepupusas);
                }}></Button>
            </View>
          </View>
        </Modal>
        <Text style={styles.titulo}>Platillos Salvadoreños</Text>
        <View>
          <View>
            <TouchableHighlight
              onPress={() => {
                setModalVisiblepupusas(!modalVisiblepupusas);
              }}>
              <Image
                style={styles.mejores}
                source={require('./src/img/mejores-1.jpg')}
              />
            </TouchableHighlight>
          </View>
          <View>
            <Image
              style={styles.mejores}
              source={require('./src/img/mejores-2.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.mejores}
              source={require('./src/img/mejores-3.jpg')}
            />
          </View>
        </View>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleFlores}
          onRequestClose={() => {
            alert('Modal ha sido cerrado.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Visitar Sitios Turisticos</Text>
              <Text>
                Los Perfectos sitios turisticos para una larga estadia
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleFlores(!modalVisibleFlores);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Text style={styles.titulo}>Rutas Turisticas</Text>
        <View style={styles.listado}>
          <View style={styles.listadoItem}>
            <TouchableHighlight
              onPress={() => {
                setModalVisibleFlores(!modalVisibleFlores);
              }}>
              <Image
                style={styles.mejores}
                source={require('./src/img/ruta-1.jpg')}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.listadoItem}>
            <Image
              style={styles.mejores}
              source={require('./src/img/ruta-2.jpg')}
            />
          </View>
          <View style={styles.listadoItem}>
            <Image
              style={styles.mejores}
              source={require('./src/img/ruta-3.jpg')}
            />
          </View>
          <View style={styles.listadoItem}>
            <Image
              style={styles.mejores}
              source={require('./src/img/ruta-4.jpg')}
            />
          </View>
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
