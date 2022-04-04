import React from 'react';
import {Text, View} from 'react-native';

import Button from '_atoms/button';
import color from '_theme/colors';

const CameraButton = ({onPress, title}) => {
  return (
    <Button
      onPress={onPress}
      center
      horizontal
      style={{
        borderRadius: 8,
        borderWidth: 2,
        borderColor: color.text,
        overflow: 'hidden',
        marginVertical: 12,
        height: 48,
        width: '100%',
      }}
      contentStyle={{backgroundColor: color.white, width: '100%'}}>
      <Text>{title}</Text>
    </Button>
  );
};

export default CameraButton;
