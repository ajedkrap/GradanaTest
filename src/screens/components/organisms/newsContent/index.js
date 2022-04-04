import React from 'react';
import {Text, View, ActivityIndicator, FlatList} from 'react-native';

import NewsCard from '_molecules/newsCard';

import color from '_theme/colors';

const NewsContent = ({loading, list}) => {
  if (loading) {
    return (
      <View
        style={{
          justifyContent: 'center',
          marginTop: 10,
          paddingHorizontal: 16,
        }}>
        <ActivityIndicator size={20} color={color.primary} />
      </View>
    );
  }

  if (list.length === 0) {
    return (
      <View
        style={{
          justifyContent: 'center',
          marginTop: 10,
          paddingHorizontal: 16,
        }}>
        <Text>Ketik kata kunci diatas, lalu tekan tombol cari</Text>
      </View>
    );
  }

  return (
    <FlatList
      keyExtractor={(val, idx) => idx + val['source']['name']}
      data={list}
      renderItem={props => <NewsCard {...props} />}
      style={{paddingHorizontal: 16, marginTop: 10}}
      contentContainerStyle={{flexGrow: 1}}
    />
  );
};

export default NewsContent;
