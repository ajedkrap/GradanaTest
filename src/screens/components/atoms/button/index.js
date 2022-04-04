import React from 'react';
import {
  View,
  Pressable,
  Animated,
  ViewPropTypes,
  ColorPropType,
} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import color from '_theme/colors';

const Button = ({
  center,
  children,
  disabled,
  onPress,
  onLongPress,
  horizontal,
  ripple,
  style: propStyle,
  contentStyle,
  testID,
}) => {
  return (
    <Animated.View style={[center ? style.center : {}, propStyle]}>
      <Pressable
        style={[
          {
            flexDirection: horizontal ? 'row' : 'column',
            flex: 1,
          },
          center ? style.center : {justifyContent: 'space-between'},
          contentStyle,
        ]}
        disabled={disabled}
        android_ripple={ripple ? {color: color.pressable} : {}}
        children={children}
        onPress={onPress}
        onLongPress={onLongPress}
        testID={testID}
      />
    </Animated.View>
  );
};

export default Button;

Button.propTypes = {
  center: PropTypes.bool,
  horizontal: PropTypes.bool,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  ripple: PropTypes.bool,
  style: ViewPropTypes.style,
  testID: PropTypes.string,
};

Button.defaultProps = {
  center: false,
  horizontal: false,
  ripple: false,
  style: {},
};
