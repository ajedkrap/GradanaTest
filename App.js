import React from 'react';
import {StatusBar} from 'react-native';

import MainStack from '_routes/mainStack';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} hidden />
      <MainStack />
    </>
  );
};

export default App;
