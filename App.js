//import { createStackNavigator, createAppContainer } from 'react-navigation';

import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack'; 

import HomeScreen from './src/Screens/HomeScreen';      // . use for go inner folder or file
import ComponentScreen from './src/Screens/ComponentScreen';
import ListScreen from './src/Screens/ListScreen';
import ImageScreen from './src/Screens/ImageScreen';
import CounterScreen from './src/Screens/CounterScreen';
import ColorScreen from './src/Screens/ColorScreen';
import SquareScreen from './src/Screens/SquareScreen';
import SquareScreenReducer from './src/Screens/SquareScreenReducer';
import CounterScreenReducer from './src/Screens/CounterScreenReducer';
import TextScreen from './src/Screens/TextScreen';
import BoxScreen from './src/Screens/BoxScreen';
import FlexboxScreen from './src/Screens/FlexboxScreen';
import AccountScreen from './src/Screens/AccountScreen';

//little object that decide what content show in the screen at any given poin of time
//allow us to navigate or essentially change the content that is visible on the screen to users
const navigator = createStackNavigator (
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    SquareReducer: SquareScreenReducer,
    CounterReducer: CounterScreenReducer,
    Text: TextScreen,
    Box: BoxScreen,
    Flexbox: FlexboxScreen,
    Account: AccountScreen

  },

  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);