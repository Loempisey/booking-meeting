import React from 'react';
import {Icon} from '@rneui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home/HomeScreen';
import MemberScreen from '../../screens/Member/MemberScreen';
import RoomScreen from '../../screens/Room/RoomScreen';
import SettingScreen from '../../screens/Setting/SettingScreen';
import {ROUTES} from '../../enums/RouteEnum';
import variables from '../../assets/styles/variables';

const Tab = createBottomTabNavigator();

const TabBottom = [
  {
    name: ROUTES.HOME,
    component: HomeScreen,
    label: 'Home',
    icon: 'md-home-outline',
  },
  {
    name: ROUTES.MEMEBER,
    component: MemberScreen,
    label: 'Metting',
    icon: 'md-people-outline',
  },
  {
    name: ROUTES.ROOM,
    component: RoomScreen,
    label: 'Room',
    icon: 'md-chatbubbles-outline',
  },
  {
    name: ROUTES.SETTING,
    component: SettingScreen,
    label: 'Setting',
    icon: 'md-settings-outline',
  },
];

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: variables.fontSizeSm,
          fontWeight: variables.fontWeightRegular,
        },
        tabBarStyle: {
          height: 70,
        },
        tabBarItemStyle: {
          height: 56,
          marginTop: 6,
        },
      }}>
      {TabBottom.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              tabBarLabel: item.label,
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({color, size}) => (
                <Icon
                  name={item.icon}
                  type="ionicon"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigation;
