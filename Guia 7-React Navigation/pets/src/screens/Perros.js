import React from 'react';
import { View, Text,Button } from 'react-native';
export default function Perro(props) {
    const{navigation}=props;
    return (
        <View>
            <Text>Estamos en Perro</Text>
            <Button 
            title='Ir a Gato'
            onPress={()=>navigation.navigate('gato')}
            ></Button>
        </View>
    );
}