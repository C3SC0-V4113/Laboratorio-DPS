import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../utils/colors';

export default function Result(props){
    const {nombre,neto,total,errorMessage}=props;
    return(
        <View style={styles.Contenido}>
            {
                total && (
                    <View>
                        <Text style={styles.Titulo}>RESUMEN</Text>
                        <DataResult titulo="Nombre:" valor={nombre}/>
                        <DataResult titulo="Salario Neto:" valor={`${neto} $`}/>
                        <DataResult titulo="Descuentos Totales:" valor={`${total.descuentoTotal} $`}/>
                        <DataResult titulo="Salario Bruto:" valor={`${total.valorNeto} $`}/>
                    </View>
                )
            }
            <View>
                <Text style={styles.Error}>{errorMessage}</Text>
            </View>
        </View>
    );
}

function DataResult(props){
    const{titulo,valor}=props;
    return(
        <View style={styles.TaMayor}>
            <Text style={styles.Tabla}>{titulo}</Text>
            <Text style={styles.Tabla}>{valor}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    Contenido:{
        backgroundColor: colors.LIGHT_PURPLE,
        padding: 30,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: 'center',
    },
    Titulo: {
      fontWeight: 'bold',
      fontSize: 18,
      color: colors.FONT_COLOR,
      textAlign: 'center',
    },
    TaMayor:{
        flexDirection:'row',
    },
    Tabla:{
        color: colors.FONT_COLOR,
        margin: 5,
    },
    Error:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    }
});