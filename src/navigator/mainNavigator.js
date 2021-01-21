import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile195037Navigator from '../features/UserProfile195037/navigator';
import Settings195036Navigator from '../features/Settings195036/navigator';
import Settings195034Navigator from '../features/Settings195034/navigator';
import SignIn2195032Navigator from '../features/SignIn2195032/navigator';
import Settings195016Navigator from '../features/Settings195016/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile195037: { screen: UserProfile195037Navigator },
Settings195036: { screen: Settings195036Navigator },
Settings195034: { screen: Settings195034Navigator },
SignIn2195032: { screen: SignIn2195032Navigator },
Settings195016: { screen: Settings195016Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
