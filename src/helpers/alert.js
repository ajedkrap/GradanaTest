import {Platform, ToastAndroid, Alert} from 'react-native';
import {hS} from '_theme/metrics';

export default (msg, title = 'Error') =>
  Platform.OS === 'android'
    ? ToastAndroid.showWithGravityAndOffset(
        msg,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        hS * (15 / 100),
      )
    : Alert.alert(title, msg);
