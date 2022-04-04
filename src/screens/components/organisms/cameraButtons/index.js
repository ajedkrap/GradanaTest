import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

import {launchCamera} from 'react-native-image-picker';

import CameraButton from '_molecules/cameraButton';

const cameraOptions = {
  mediaType: 'photo',
  cameraType: 'back',
  includeBase64: true,
  quality: 0.75,
};

const CameraButtons = ({route, navigation: nav, cameraGranted}) => {
  const [pic, setPic] = useState(null);

  const handleDefaultCamera = async () =>
    await launchCamera(cameraOptions, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        // do the right thing
        const img = res.assets[0];
        setPic(img);
      }
    });

  useEffect(() => {
    if (pic) nav.navigate('picture', {pic, custom: false});
  }, [pic]);

  if (!cameraGranted) {
    return (
      <View
        style={{alignItems: 'center', paddingHorizontal: 16, marginTop: 24}}>
        <Text>Mohon Aktifkan Perizinan Sistem untuk Camera</Text>
      </View>
    );
  }

  return (
    <View style={{alignItems: 'center', paddingHorizontal: 16, marginTop: 24}}>
      <CameraButton
        title={'Default Camera'}
        onPress={() => handleDefaultCamera()}
      />
      <CameraButton
        title={'Custom Camera'}
        onPress={() => nav.navigate('camera-custom')}
      />
    </View>
  );
};

export default CameraButtons;
