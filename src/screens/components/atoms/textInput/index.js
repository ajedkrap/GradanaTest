import React, {forwardRef} from 'react';
import {TextInput as Input} from 'react-native';
import PropTypes from 'prop-types';

const TextInput = forwardRef(
  (
    {
      align,
      editable,
      keyboard,
      length,
      onBlur,
      onChangeText,
      onEndEditing,
      onFocus,
      onSubmit,
      password,
      placeholder,
      style,
      multiline,
      value,
    },
    ref,
  ) => {
    return (
      <Input
        ref={ref}
        editable={editable}
        keyboardType={keyboard}
        maxLength={length}
        multiline={multiline}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onEndEditing={onEndEditing}
        onFocus={onFocus}
        onSubmitEditing={onSubmit}
        placeholder={placeholder}
        value={value}
        secureTextEntry={password}
        style={[{margin: 0, height: 36, flexGrow: 1}, style]}
        textAlign={align}
      />
    );
  },
);

export default TextInput;

TextInput.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  editable: PropTypes.bool,
  keyboard: PropTypes.oneOf([
    'default',
    'number-pad',
    'decimal-pad',
    'numeric',
    'email-address',
    'phone-pad',
  ]),
  multiline: PropTypes.bool,
  length: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
  onChangeText: PropTypes.func,
  onSubmit: PropTypes.func,
  password: PropTypes.bool,
  placeholder: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

TextInput.defaultProps = {
  align: 'left',
  editable: true,
  keyboard: 'default',
  length: null,
  onChangeText: null,
  onSubmit: null,
  multiline: false,
  password: false,
  placeholder: '',
  style: {},
};
