//Import React
import React from 'react';

//Import Navigators
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

//Import External Screens
import HomeScreen from './drawerScreens/HomeScreen';
import ScanScreen from './drawerScreens/ScanScreen';
import PedidosSceen from './drawerScreens/PedidosSceen.js';
import BaldeScreen from './drawerScreens/BaldeScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Ponto Ambev',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: ScanScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Ponto Ambev',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const ThirtyActivity_StackNavigator = createStackNavigator({
  First: {
    screen: PedidosSceen,
    navigationOptions: ({navigation}) => ({
      title: 'Ponto Ambev',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Forthy_StackNavigator = createStackNavigator({
  First: {
    screen: BaldeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Ponto Ambev',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    HomeScreen: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Ponto Ambev',
      },
    },
    ScanScreen: {
      screen: SecondActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Ponto Ambev',
      },
    },

    PedidosSceen: {
      screen: ThirtyActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Ponto Ambev',
      },
    },
    BaldeScreen: {
      screen: Forthy_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Ponto Ambev',
      },
    },
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);
export default DrawerNavigatorRoutes;
