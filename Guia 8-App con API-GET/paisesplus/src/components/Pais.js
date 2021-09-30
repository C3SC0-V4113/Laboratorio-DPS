import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
const Pais = ({resultado}) => {
    console.log({resultado})
  const [info, setinfo] = useState([]);
  const [nombre, setnombre] = useState();
  const [capital, setcapital] = useState();
  const [region, setregion] = useState();
  const [lengua, setlengua] = useState([]);
  const [extension, setExtension]=useState(0);
  useEffect(() => {
    setinfo(resultado);
    lengua.length = 0;
    Object.values(info).map(e => {
      setnombre(e.nome.abreviado);
      setcapital(e.governo.capital.nome);
      setregion(e.localizacao.regiao.nome);
      Object.values(e.linguas).map(l => {
        lengua.push(l.nome);
      });
      setExtension(e.area.total+' '+e.area.unidade.símbolo);
    });
  });
  return (
    <Card>
      <Card.Title>{nombre}</Card.Title>
      <Card.Divider />
      <View style={{justifyContent: 'center'}}>
        <Text>Capital:{capital}</Text>
        <Text>Region:{region}</Text>
        <Text>Lengua:{lengua.toString()}</Text>
        <Text>Extension Territorial:{extension}</Text>
      </View>
    </Card>
  );
};
export default Pais;
