import {StyleSheet} from 'react-native';
import color from '_theme/colors';

const ANDROID_HEADER_HEIGHT = 90;

export default StyleSheet.create({
  container: {
    height: ANDROID_HEADER_HEIGHT,
    width: '100%',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: 'flex-end',
    elevation: 8,
    flexDirection: 'row',
  },
  title: {
    paddingLeft: 14,
    paddingBottom: 14,
    fontSize: 24,
    fontWeight: 'bold',
    color: color.white,
    textTransform: 'capitalize',
  },
});
