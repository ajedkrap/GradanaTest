import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GradView from 'react-native-linear-gradient';

import color from '_theme/colors';
import style from './style';

const DefaultHeader = ({route, navigation: nav, back}) => {
  return (
    <GradView
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1.8}}
      colors={[color.primary, color.secondary]}
      style={style.container}>
      {back && (
        <Icon name={'chevron-left'} style={[style.title, {marginRight: 8}]} />
      )}
      <Text style={style.title}>{route.name}</Text>
    </GradView>
  );
};

export default DefaultHeader;
