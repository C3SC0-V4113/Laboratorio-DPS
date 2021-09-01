/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// npx react-native run-android
// npx @react-native-community/cli doctor
//expo start --clear
//keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000


import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Result from './src/components/Result';
import Footer from './src/components/Footer';
import Form from './src/components/Form';

export default function App(){
  const [nombre, setNombre]=useState('');
  const [neto, setSalario]=useState(null);
  const [total, setTotal]=useState(null);
  const [errorMessage, setError]=useState('');

  useEffect(()=>{
    if(nombre && neto){
      calculate();
    } else{
      reset();
    }
  },[nombre,neto]);

  const calculate=()=>{
    reset();
    if(!nombre){
      setError('Añade un Nombre válido');
    } else if(!neto){
      setError('Añade un salario válido');
    } else{
      const AFP=3/100;
      const ISSS=4/100;
      const RENTA=5/100;
      const descuento=(neto*AFP)+(neto*ISSS)+(neto*RENTA);
      setTotal({
        descuentoTotal: descuento.toFixed(2).replace('.',','),
        valorNeto: (neto-descuento).toFixed(2).replace('.',','),
      });
    }
  };

  const reset = () => {
    setError('');
    setTotal(null);
  };

  return(
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <Form
      setNombre={setNombre}
      setSalario={setSalario}
      />
      <Result
      nombre={nombre}
      neto={neto}
      total={total}
      errorMessage={errorMessage}
      />
      <Footer calculate={calculate}></Footer>
    </SafeAreaView>
    </>
  );
}