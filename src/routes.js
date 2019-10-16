import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './Pages/Main';
import User from './Pages/User';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    User,
  }),
);

export default Routes;
