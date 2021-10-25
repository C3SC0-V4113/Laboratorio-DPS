import React from 'react';
import {StyleSheet, Text, View, Modal, TouchableHighlight} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {markers as markers} from './Markers';
import {Card, Image} from 'react-native-elements';
export default class App extends React.Component {
  state = {
    markers: markers,
    modalVisible: false,
    title: 'Tittle',
    image: 'Image',
  };
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.centeredView}>
              <Card title={this.state.title}>
                <Image
                  source={{uri: this.state.image}}
                  style={{width: 300, height: 200}}
                />
                <TouchableHighlight
                  style={{...styles.openButton, backgroundColor: '#2196F3'}}
                  onPress={() => {
                    this.setState({modalVisible: false});
                  }}>
                  <Text style={styles.textStyle}>Cerrar</Text>
                </TouchableHighlight>
              </Card>
            </View>
          </View>
        </Modal>
        <MapView
          style={{width: '100%', height: '100%'}}
          initialRegion={{
            latitude: 13.7159035,
            longitude: -89.1558874,
            latitudeDelta: 2.0,
            longitudeDelta: 2.0,
          }}>
          <Marker
            coordinate={{
              latitude: 13.7159035,
              longitude: -89.1558874,
            }}
            title="Universidad Don Bosco"
            description="Universidad Don Bosco Campus Soyapango"
          />
          {this.state.markers.map((marker, index) => (
            <Marker
            key={index}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
              onPress={() => {
                this.setState({
                  modalVisible: true,
                  title: marker.title,
                  image: marker.image,
                });
              }}
            />
          ))}
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
