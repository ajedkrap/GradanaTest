import React, {useState, useEffect} from 'react';
import {Text, View, Linking} from 'react-native';

import {PERMISSIONS} from 'react-native-permissions';

import {checkPermission, requestPermission} from '_helpers/permissions';
import CameraButtons from '_organisms/cameraButtons';

const CameraOptions = props => {
  const [cameraGranted, grantCamera] = useState(false);

  const onPermitCamera = async () => {
    const permission = PERMISSIONS.ANDROID.CAMERA;

    const hasPermission = await checkPermission(permission);
    if (!hasPermission) {
      const requestGranted = await requestPermission(permission);
      if (!requestGranted) {
        DefaultAlert.alert(
          'Please allow permission to access the Location.',
          'Location Permission Request',
          [
            {
              text: 'Go to Settings',
              onPress: () => {
                Linking.openSettings();
              },
            },
          ],
          {cancelable: false},
        );
      } else {
        grantCamera(true);
      }
    } else {
      grantCamera(true);
    }
  };

  useEffect(() => {
    onPermitCamera();
  }, []);

  return (
    <View style={{flex: 1}}>
      <CameraButtons cameraGranted={cameraGranted} {...props} />
    </View>
  );
};

export default CameraOptions;
