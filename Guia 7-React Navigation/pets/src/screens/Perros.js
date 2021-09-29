import React from 'react';
import {View} from 'react-native';
import Lista from '../Components/lista';

const perros = [
  {
    name: 'Lebrel afgano',
    avatar_url: 'https://images8.alphacoders.com/463/thumb-1920-463906.jpg',
    subtitle: 'Afganistán',
  },
  {
    name: 'Dachsbracke alpino',
    avatar_url:
      'https://i.pinimg.com/564x/24/cb/e1/24cbe1de6e46ad9c961c4475319ff479.jpg',
    subtitle: 'Austria',
  },
  {
    name: 'American bully',
    avatar_url:
      'https://www.petdarling.com/wp-content/uploads/2014/04/american-bully-blue.jpg',
    subtitle: 'Estados Unidos',
  },
  {
    name: 'Collie barbudo',
    avatar_url:
      'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/24142449/Bearded-Collie-standing-in-the-grass.jpg',
    subtitle: 'Escocia',
  },
  {
    name: 'Boston terrier',
    avatar_url:
      'https://curiosfera-animales.com/wp-content/uploads/2018/02/boston-terrier-caracter%C3%ADsticas.jpg',
    subtitle: 'Estados Unidos',
  },
];

export default function Perro() {
  return (
    <View>
      <Lista list={perros} />
    </View>
  );
}
