//Import React
import React from 'react';

//Import all required component
import {View, Text, Image} from 'react-native';

const HomeScreen = () => {
  global.currentScreenIndex = 'HomeScreen';
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 100}}>
      <Image source={require('../../Image/maps.png')} />
    </View>
  );
};
export default HomeScreen;
