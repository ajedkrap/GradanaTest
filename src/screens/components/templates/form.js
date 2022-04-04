import React, {useState} from 'react';
import {Text, View} from 'react-native';

import AddressForm from '_organisms/addressForm';

const Form = props => {
  return (
    <View style={{flex: 1}}>
      <AddressForm {...props} />
    </View>
  );
};

export default Form;
