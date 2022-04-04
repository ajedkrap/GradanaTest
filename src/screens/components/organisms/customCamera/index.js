import React, {useRef, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

import Button from '_atoms/button';
import CameraView from '_molecules/cameraView';
import color from '_theme/colors';
import {hS, wS} from '_theme/metrics';

const TakeCameraButton = ({onPress}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        height: 64,
        aspectRatio: 1,
        overflow: 'hidden',
        zIndex: 100,
        backgroundColor: color.secondary,
        borderRadius: 64 / 2,
        borderWidth: 6,
        borderColor: color.white,
        bottom: 18,
        left: '41%',
        right: '41%',
      }}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: color.ripple}}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Icon name={'camera-plus'} size={20} color={color.white} />
      </Pressable>
    </View>
  );
};

const LoadingView = () => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          zIndex: 120,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(230,230,230,0.6)',
        },
      ]}>
      <ActivityIndicator size={24} color={color.white} />
      <Text style={{marginTop: 18, color: color.white}}>
        Taking in Progress...
      </Text>
    </View>
  );
};

const CustomCamera = ({route, navigation: nav}) => {
  const [isLoading, setLoading] = useState(false);
  const [pic, setPic] = useState(null);

  const cameraRef = useRef();
  const devices = useCameraDevices();
  const device = devices.back;

  const onTakingPicture = async () => {
    setLoading(true);
    try {
      const photo = await cameraRef.current.takePhoto({flash: 'off'});
      setPic(photo);
    } catch (e) {
      Alert.alert(
        'Custom Camera Error',
        'Gagal Mengambil gambar di kamera kustom',
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (pic) nav.navigate('picture', {pic, custom: true});
  }, [pic]);

  return (
    <View style={{marginTop: 18}}>
      <View
        style={{
          position: 'relative',
          height: hS * (65 / 100),
          borderRadius: 18,
          overflow: 'hidden',
          backgroundColor: '#effefe',
          width: '100%',
          elevation: 4,
          zIndex: 30,
        }}>
        {isLoading && <LoadingView />}
        <TakeCameraButton onPress={() => onTakingPicture()} />
        <View style={{flex: 1, position: 'relative'}}>
          <CameraView ref={cameraRef} camera={Camera} device={device} />
        </View>
      </View>

      {/* <Button
        // onPress={onPress}
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
          marginTop: 24,
        }}
        contentStyle={{backgroundColor: color.white, width: '100%'}}>
        <Icon name={'camera-plus'} size={20} />
        <Text style={{marginLeft: 18, fontSize: 18}}>Ambil Photo</Text>
      </Button> */}
    </View>
  );
};

export default CustomCamera;
