import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  Modal,
  StyleSheet,
  Pressable,
} from 'react-native';
import {Card, ListItem, Button, Icon, Avatar} from 'react-native-elements';

const Lista = ({list}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nombre, setNombre] = useState('');
  const [region, setRegion] = useState('');
  const [img, setImg] = useState('');

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={styles.tinyLogo} source={{uri: img}} />
            <Text style={styles.modalText}>{nombre}</Text>
            <Text style={styles.modalText}>{region}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Esconder Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Card containerStyle={{padding: 0}}>
        {list.map((l, i) => (
          <Pressable
            key={i + 100}
            onPress={() => {
              setModalVisible(true);
              setNombre(l.name);
              setRegion(l.subtitle);
              setImg(l.avatar_url);
            }}>
            <ListItem key={i} bottomDivider>
              <Avatar source={{uri: l.avatar_url}} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </Pressable>
        ))}
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
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

export default Lista;
