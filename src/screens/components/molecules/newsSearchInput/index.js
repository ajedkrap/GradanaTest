import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Label from '_atoms/label';
import Button from '_atoms/button';
import TextInput from '_atoms/textInput';
import color from '_theme/colors';

const NewsSearchInput = ({onClickSearch, onChange, loading, value}) => {
  const onHandleText = text => onChange(text && text !== '' ? text : '');

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 8,
        minHeight: 64,
      }}>
      <View
        style={{
          flex: 5,
          borderRadius: 8,
          borderWidth: 2,
          borderColor: color.text,
          backgroundColor: color.white,
          marginRight: 8,
          paddingLeft: 8,
          overflow: 'hidden',
          elevation: 4,
        }}>
        <TextInput
          value={value}
          style={{fontSize: 20}}
          editable={!loading}
          onChangeText={onHandleText}
        />
      </View>
      <Button
        center
        ripple
        disabled={loading}
        onPress={onClickSearch}
        style={{borderRadius: 8, flex: 1, overflow: 'hidden', elevation: 4}}
        contentStyle={{backgroundColor: color.secondary, width: '100%'}}>
        <Icon name={'magnify'} size={20} color={color.white} />
      </Button>
    </View>
  );
};

export default NewsSearchInput;
