import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Result(props){
    const {nombre,neto,total,errorMessage}=props;
    return(
        <View>
            {
                total && (
                    <View>
                        <Text>RESUMEN</Text>
                        <DataResult titulo="Nombre" valor={nombre}/>
                        <DataResult titulo="Salario Neto" valor={`${neto} $`}/>
                        <DataResult titulo="Descuentos Totales" valor={`${total.descuentoTotal} $`}/>
                        <DataResult titulo="Salario Bruto" valor={`${total.valorNeto} $`}/>
                    </View>
                )
            }
            <View>
                <Text>{errorMessage}</Text>
            </View>
        </View>
    );
}

function DataResult(props){
    const{titulo,valor}=props;
    return(
        <View>
            <Text>{titulo}</Text>
            <Text>{valor}</Text>
        </View>
    );
}