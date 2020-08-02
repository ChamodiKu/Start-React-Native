//import { createStackNavigator, createAppContainer } from 'react-navigation';

import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack'; 

import HomeScreen from './src/Screens/HomeScreen';
import ComponentScreen from './src/Screens/ComponentScreen';
import ListScreen from './src/Screens/ListScreen';

//little object that decide what content show in the screen at any given poin of time
//allow us to navigate or essentially change the content that is visible on the screen to users
const navigator = createStackNavigator (
  {
    Home : HomeScreen,
    Components : ComponentScreen,
    List: ListScreen
  },

  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);