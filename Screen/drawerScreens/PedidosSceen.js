//Import React
import React from 'react';

//Import all required component
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import {Card} from 'react-native-elements';

const data = [
  {
    image: require('../../Image/logo_nossa.jpg'),
    title: 'Nossa Pernambuco',
  },
  {
    image: require('../../Image/logo_bud.jpg'),
    title: 'Budweiser',
  },
];

const data2 = [
  {
    image: require('../../Image/logo_stella-artois.jpg'),
    title: 'Stella Artois',
  },
  {
    image: require('../../Image/logo_skol.jpg'),
    title: 'Skoll',
  },
];

const PedidosScreen = (props) => {
  const handleCheckout = () => {
    console.log('check');
    props.navigation.navigate('BaldeScreen');
  };
  global.currentScreenIndex = 'HomeScreen';
  return (
    <View>
      <FlatList
        horizontal
        data={data}
        renderItem={({item: rowData}) => {
          return (
            <Card
              title={null}
              image={rowData.image}
              containerStyle={{padding: 0, width: 160}}>
              <Text style={{marginBottom: 10}}>{rowData.title}</Text>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />
      <FlatList
        horizontal
        data={data2}
        renderItem={({item: rowData}) => {
          return (
            <Card
              title={null}
              image={rowData.image}
              containerStyle={{padding: 0, width: 160, marginBottom: 215}}>
              <Text style={{marginBottom: 10}}>{rowData.title}</Text>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />
      <View>
        <Button
          title="VER MEU BALDE"
          color="#0e4c8a"
          onPress={handleCheckout}
        />
      </View>
    </View>
  );
};
export default PedidosScreen;
