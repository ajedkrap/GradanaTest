import React from 'react';
import {View, Text, ViewPropTypes, TextPropTypes} from 'react-native';
import PropTypes from 'prop-types';

const Label = ({
  adjust,
  children,
  contStyle,
  ellipsize,
  line,
  numberOfLine = 0,
  textStyle,
  onPress,
}) => {
  return (
    <View style={[{fontFamily: 'roboto'}, contStyle]}>
      <Text
        adjustsFontSizeToFit={adjust}
        onPress={onPress}
        ellipsizeMode={ellipsize}
        children={children}
        style={textStyle}
        numberOfLines={numberOfLine}
      />
    </View>
  );
};

export default Label;

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  contStyle: ViewPropTypes.style,
  ellipsize: Text.propTypes.ellipsizeMode,
  line: PropTypes.number,
  textStyle: Text.propTypes.style,
};

Label.defaultProps = {
  contStyle: {},
  ellipsize: 'tail',
  line: 0,
  textStyle: {},
};
