import React, {forwardRef} from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';

import {useIsFocused} from '@react-navigation/native';

const CameraView = forwardRef(({camera: Camera, device}, ref) => {
  const isFocused = useIsFocused();

  if (device == null)
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  return (
    <Camera
      ref={ref}
      photo={true}
      style={{
        zIndex: 40,
        ...StyleSheet.absoluteFillObject,
      }}
      device={device}
      isActive={isFocused}
      preset="medium"
    />
  );
});

export default CameraView;
