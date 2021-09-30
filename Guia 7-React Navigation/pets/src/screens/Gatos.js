import React from 'react';
import {View} from 'react-native';
import Lista from '../Components/lista';

const gatos = [
  {
    name: 'Siamés',
    avatar_url:
      'https://www.zooplus.es/magazine/wp-content/uploads/2019/01/siamkatze-1-768x512-1-768x512.jpeg',
    subtitle: 'Tailandia',
  },
  {
    name: 'Snowshoe',
    avatar_url:
      'https://cdn.wamiz.fr/cdn-cgi/image/quality=80,width=1200,height=675,fit=cover/https://cdn.wamiz.fr/animal/breed/cat/adult/5cd04b89c3cb4174310520.jpg',
    subtitle: 'Estados Unidos',
  },
  {
    name: 'Angora turco',
    avatar_url:
      'https://vidanatural.net/wp-content/uploads/2019/01/angora-turco-blanco.jpg',
    subtitle: 'Turquía',
  },
  {
    name: 'Persa',
    avatar_url:
      'https://sumedico.blob.core.windows.net/images/2021/01/19/curiosidadesgatopersa.jpg',
    subtitle: 'Irán',
  },
  {
    name: 'Sphynx',
    avatar_url:
      'https://noticiasrealessv.com/wp-content/uploads/2020/04/Gato-Sphynx-o-gato-esfinge-1.jpg',
    subtitle: 'Canadá',
  },
];

export default function Gato() {
  return (
    <View>
      <Lista list={gatos} />
    </View>
  );
}
