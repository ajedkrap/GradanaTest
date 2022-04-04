import React from 'react';
import {Text, View} from 'react-native';

import TheCustomCamera from '_organisms/customCamera';

const CustomCamera = props => {
  return (
    <View style={{flex: 1, paddingHorizontal: 16}}>
      <TheCustomCamera {...props} />
    </View>
  );
};

export default CustomCamera;
