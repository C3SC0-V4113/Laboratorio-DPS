import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default function Form(props){
    const{setNombre,setSalario}=props;
    return(
        <View>
            <View>
                <TextInput
                placeholder="Ingrese su nombre"
                keyboardType="default"
                onChange={e=>setNombre(e.nativeEvent.text)}
                />
                <TextInput
                placeholder="Ingrese su salario neto"
                keyboardType="number-pad"
                onChange={e=>setSalario(e.nativeEvent.text)}
                />
            </View>
        </View>
    );
}