import React from 'react';
import {View, StyleSheet,Image,Text,ScrollView} from 'react-native';
const App = () =>{
 return(
 <>
<View >
 <View style={{flexDirection:'row'}} >
 <Image
 style={styles.banner}
 source={require('./src/img/bg.jpg')} />
 </View>
</View>

<View style={styles.contenedor}>
  <Text style={styles.titulo}>Que hacer en El Salvador</Text>
  <ScrollView horizontal>
    <View>
      <Image
        style={styles.ciudad}
        source={require('./src/img/actividad-1.jpg')}
      />
    </View>
    <View>
      <Image
        style={styles.ciudad}
        source={require('./src/img/actividad-2.jpg')}
      />
    </View>
    <View>
      <Image
        style={styles.ciudad}
        source={require('./src/img/actividad-3.jpg')}
      />
    </View>
    <View>
      <Image
        style={styles.ciudad}
        source={require('./src/img/actividad-4.jpg')}
      />
    </View>
    <View>
      <Image
        style={styles.ciudad}
        source={require('./src/img/actividad-5.jpg')}
      />
    </View>
  </ScrollView>
</View>
</>
 );
};
const styles = StyleSheet.create({
banner:{
 height:250,
 flex:1
},
titulo:{
  fontWeight: 'bold',
  fontSize:24,
  marginVertical:10
},
contenedor:{
  marginHorizontal:10,
},
ciudad:{
  width:250,
  height:300,
  marginRight:10
}
});
export default App;
