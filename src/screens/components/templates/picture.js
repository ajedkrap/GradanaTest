import React from 'react';
import {Text, View} from 'react-native';

import PictureView from '_organisms/pictureView';

const Picture = props => {
  return (
    <View style={{paddingTop: 12, paddingHorizontal: 16}}>
      <PictureView {...props} />
    </View>
  );
};

export default Picture;
