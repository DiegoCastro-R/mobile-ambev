import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import {StyleSheet, ActivityIndicator} from 'react-native';


const theme =  {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
      <View style={styles.container, styles.horizontal}>
        <Text style={styles.content}>Hello, Mega Hack</Text>

      </View>
      <View>
      <ActivityIndicator size="large" color="#0000ff" />
      </View>
      </View>
    </PaperProvider>
  );


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent:"center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },

  
});



