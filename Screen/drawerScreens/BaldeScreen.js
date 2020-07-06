//Import React
import React from 'react';

//Import all required component
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const BaldeScreen = (props) => {
  global.currentScreenIndex = 'BaldeScreen';
  return (
    <View>
      <View />
      <View style={styles.container}>
        <Image source={require('../../Image/balde.png')} />
      </View>

      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>REALIZAR PAGAMENTO</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BaldeScreen;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    marginBottom: 80,
    alignItems: 'center',
  },

  buttonStyle: {
    backgroundColor: '#0e4c8a',
    borderWidth: 1,
    height: 100,
    color: '#0e4c8a',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 600,
    marginBottom: 20,
  },
  buttonTextStyle: {
    marginTop: 10,
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  TextStyle: {
    marginTop: 10,
    color: 'black',
    paddingVertical: 10,
    fontSize: 30,
  },
});
