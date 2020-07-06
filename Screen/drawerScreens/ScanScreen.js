//Import React
import React from 'react';

//Import all required component
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ScanScreen = () => {
  global.currentScreenIndex = 'HomeScreen';
  return (
    <View>
      <View />
      <View style={styles.container}>
        <Text style={styles.TextStyle}>ESCANEIE O QR CODE</Text>
        <Image source={require('../../Image/box.png')} />
      </View>

      <TouchableOpacity style={styles.buttonStyle} onPress={''}>
        <Text style={styles.buttonTextStyle}>CHECK-IN</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ScanScreen;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 300,
    marginBottom: 300,
    justifyContent: 'flex-end',
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
