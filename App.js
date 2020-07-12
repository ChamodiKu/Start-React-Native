import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/Screens/HomeScreen';

const navigator = createStackNavigator (
  {
    Home: HomeScreen
  },

  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);