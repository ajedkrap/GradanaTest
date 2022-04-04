import React from 'react';
import {Text, View} from 'react-native';

import Label from '_atoms/label';
import style from './style';

const NewsHeaderTitle = () => {
  return (
    <Label contStyle={style.container} textStyle={style.text}>
      Get News
    </Label>
  );
};

export default NewsHeaderTitle;
