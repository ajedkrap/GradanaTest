import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '_atoms/button';
import Label from '_atoms/label';
import color from '_theme/colors';

const AddressSelector = ({label, disabled, openList, region}) => {
  return (
    <View>
      <Label>{region}</Label>
      <Button
        ripple
        disabled={disabled}
        onPress={openList}
        horizontal
        style={{
          borderRadius: 8,
          borderWidth: 2,
          borderColor: disabled ? '#d3d3d3' : color.text,
          overflow: 'hidden',
          marginTop: 4,
          marginBottom: 12,
          height: 48,
          width: '100%',
        }}
        contentStyle={{
          backgroundColor: disabled ? '#e3e3e3' : color.white,
          width: '100%',
          paddingHorizontal: 8,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontWeight: label.includes('Pilih') ? 'bold' : 'normal'}}>
          {label}
        </Text>
        <Icon name={'chevron-down'} size={18} />
      </Button>
    </View>
  );
};

export default AddressSelector;
