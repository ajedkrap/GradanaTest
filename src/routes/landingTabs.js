import React from 'react';
import {View, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import DefaultHeader from '_organisms/defaultHeader';
import LandingScreen from '_screens/landingScreen';
import FormScreen from '_screens/formScreen';
import CameraStack from '_routes/cameraStack';

import color from '_theme/colors';

const Tabs = [
  {
    title: 'Camera',
    name: 'camera',
    logo: 'camera',
    screen: CameraStack,
  },
  {
    title: 'API',
    name: 'landing',
    logo: 'api',
    screen: LandingScreen,
  },
  {
    title: 'Form',
    name: 'form',
    logo: 'form-select',
    screen: FormScreen,
  },
];

const {Navigator, Screen} = createBottomTabNavigator();

const LandingTabs = () => {
  return (
    <Navigator
      initialRouteName="landing"
      screenOptions={{
        header: props => <DefaultHeader {...props} />,
      }}>
      {Tabs.map((val, idx) => (
        <Screen
          key={idx + val['name']}
          name={val['name']}
          component={val['screen']}
          options={{
            tabBarLabel: val['title'],
            tabBarLabelStyle: {paddingBottom: 4},
            tabBarIcon: ({color, size}) => (
              <Icon name={val['logo']} color={color} size={size} />
            ),
            tabBarActiveTintColor: color.primary,
            tabBarInactiveTintColor: 'grey',
          }}
        />
      ))}
    </Navigator>
  );
};

export default LandingTabs;
