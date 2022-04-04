import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import CameraOptionsScreen from '_screens/cameraOptionsScreen';
import CustomCameraScreen from '_screens/customCameraScreen';

const {Navigator, Screen} = createStackNavigator();

const CameraStack = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={'camera-options'} component={CameraOptionsScreen} />
      <Screen name={'camera-custom'} component={CustomCameraScreen} />
    </Navigator>
  );
};

export default CameraStack;
