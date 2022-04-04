import React, {useCallback} from 'react';
import {Text, View, Image, Linking, Alert} from 'react-native';

import moment from 'moment';

import Label from '_atoms/label';
import Button from '_atoms/button';
import {hS} from '_theme/metrics';
import color from '_theme/colors';

const NewsCard = ({item, index}) => {
  const onHandleURL = async url => await Linking.openURL(url);

  return (
    <View
      style={{
        padding: 12,
        backgroundColor: color.white,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: color.text,
        marginBottom: 12,
      }}>
      <View
        style={{
          backgroundColor: '#333333',
          height: hS * (25 / 100),
          marginVertical: 8,
        }}>
        <Image
          style={{flex: 1, height: null, width: null}}
          resizeMode={'cover'}
          source={{uri: item.urlToImage}}
        />
      </View>
      <View style={{marginBottom: 8}}>
        <Label textStyle={{fontSize: 20, fontWeight: '900'}}>
          {item.title}
        </Label>
        <Label>{item.author ? 'By ' + item.author : ''}</Label>
      </View>
      <Label contStyle={{marginBottom: 12}}>{item.description}</Label>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <Label>{moment(item.publishedAt).format('MMM, Do YYYY')}</Label>
        <Button
          ripple
          center
          onPress={() => onHandleURL(item.url)}
          style={{
            width: '30%',
            minHeight: hS * (4 / 100),
            borderRadius: 8,
            overflow: 'hidden',
          }}
          contentStyle={{backgroundColor: color.primary, width: '100%'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>See More</Text>
        </Button>
      </View>
    </View>
  );
};

export default NewsCard;
