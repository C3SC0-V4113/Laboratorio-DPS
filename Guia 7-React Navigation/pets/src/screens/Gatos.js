import React from 'react';
import { View, Text,Button } from 'react-native';
export default function Gato(props) {
    const{navigation}=props;
    return (
        <View>
            <Text>Estamos en Gato!</Text>
            <Button 
            title='Ir a Perros'
            onPress={()=>navigation.navigate('perro')}
            ></Button>
        </View>
    );
}