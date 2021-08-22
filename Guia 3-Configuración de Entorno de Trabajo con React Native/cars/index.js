import React,{Component} from 'react';
import {AppRegistry} from 'react-native'
import {Text,View} from 'react-native';

const textosaludo=()=>{
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>"Hola Mundo"</Text>
        </View>
    );
}

AppRegistry.registerComponent("cars",()=>textosaludo);