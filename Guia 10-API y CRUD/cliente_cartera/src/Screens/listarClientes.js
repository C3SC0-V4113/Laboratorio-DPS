import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function listarClientes({navigation}) {
  {
    const [elementos, setElementos] = useState([]);
    const [total, setTotal] = useState(0);

    cargarRegistros = async () => {
      const url =
        'https://guia10-vc190544.000webhostapp.com/api.php?comando=listar';
      try {
        const respuesta = await fetch(url);
        const resultax = await respuesta.json();
        setElementos(resultax.records);
        setTotal(resultax.records.length);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      cargarRegistros();
    });

    return (
      <View style={{flex: 1}}>
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
          {total + ' '}
          Productos
        </Text>
        <FlatList
          data={elementos}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate('Detalle', {item: item})}>
              <View
                style={{flexDirection: 'row', marginTop: 15, marginLeft: 2}}>
                <Image
                  style={{width: 90, height: 90}}
                  source={{uri: item.fotografia}}
                />
                <View style={{height: 80, marginLeft: 5}}>
                  <Text style={{flex: 1, fontSize: 18, color: 'black'}}>
                    {item.nombre}
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    {'$' + item.preciodeventa}
                  </Text>
                  <Text style={{flex: 1, fontSize: 14, color: 'black'}}>
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
          onPress={() => navigation.navigate('Agregar')}>
          <Icon name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}
