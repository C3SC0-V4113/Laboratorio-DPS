import React,{Component} from 'react';
import {AppRegistry} from 'react-native'
import {Text,View} from 'react-native';
import { SafeAreaView,FlatList,StyleSheet,StatusBar, Image } from 'react-native';

// npx react-native run-android
// npx @react-native-community/cli doctor

const DATA=[
    {
        id:'1',
        title:'Toyota',
    },
    {
        id:'2',
        title:'Mazda',
    },
    {
        id:'3',
        title:'Mitsubishi',
    },
];

const Item=({title})=>(
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const App=()=>{
    const renderItem=({item})=>(
        <Item title={item.title}/>
    );
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
            />
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item:{
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title:{
        fontSize: 32,
    },
});

AppRegistry.registerComponent("main",()=>App);