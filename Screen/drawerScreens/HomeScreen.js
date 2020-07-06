//Import React
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
//Import all required component
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = (props) => {
  global.currentScreenIndex = 'HomeScreen';
  const handleCheckin = () => {
    props.navigation.navigate('ScanScreen');
  };
  return (
    <View>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>

      <TouchableOpacity style={styles.buttonStyle} onPress={handleCheckin}>
        <Text style={styles.buttonTextStyle}>CHECK-IN</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 600,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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
});
