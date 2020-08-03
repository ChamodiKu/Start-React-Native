//import { createStackNavigator, createAppContainer } from 'react-navigation';

import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack'; 

import HomeScreen from './src/Screens/HomeScreen';      // . use for go inner folder or file
import ComponentScreen from './src/Screens/ComponentScreen';
import ListScreen from './src/Screens/ListScreen';
import ImageScreen from './src/Screens/ImageScreen';

//little object that decide what content show in the screen at any given poin of time
//allow us to navigate or essentially change the content that is visible on the screen to users
const navigator = createStackNavigator (
  {
    Home : HomeScreen,
    Components : ComponentScreen,
    List: ListScreen,
    Image: ImageScreen
  },

  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);