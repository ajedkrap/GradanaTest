import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import DefaultHeader from '_organisms/defaultHeader';
import LandingTabs from '_routes/landingTabs';
import PictureScreen from '_screens/pictureScreen';

import color from '_theme/colors';

const {Screen, Navigator} = createStackNavigator();

const MainStack = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        barStyle={'light-content'}
        backgroundColor={color.primary}
        translucent={false}
      />
      <Navigator>
        <Screen
          name={'landing-tabs'}
          options={{headerShown: false}}
          component={LandingTabs}
        />
        <Screen
          name={'picture'}
          options={{header: props => <DefaultHeader back {...props} />}}
          component={PictureScreen}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
