import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';

import color from '_theme/colors';
import {hS} from '_theme/metrics';

const BASE64_PREFIX = 'data:image/png;base64,';

const PictureView = ({route, navigaton: nav}) => {
  const {pic, custom} = route.params;
  console.log(pic);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: '#efefef',
          borderRadius: 8,
          borderWidth: 2,
          borderColor: color.text,
          height: hS * (45 / 100),
          width: '100%',
        }}>
        <Image
          style={{height: null, width: null, flex: 1}}
          resizeMode={'contain'}
          source={{uri: custom ? 'file://' + pic.path : pic.uri}}
        />
      </View>
    </View>
  );
};

export default PictureView;
