import React from 'react';
import {Text, View} from 'react-native';

import NewsHeaderTitle from '_molecules/newsHeaderTitle';
import NewsSearchInput from '_molecules/newsSearchInput';
import style from './style';

const NewsHeader = ({onChangeInput, onSearch, loading, searchValue}) => {
  return (
    <View style={style.container}>
      <View style={[style.center, style.headerCont]}>
        <NewsHeaderTitle />
        <NewsSearchInput
          loading={loading}
          onChange={onChangeInput}
          onClickSearch={onSearch}
          value={searchValue}
        />
      </View>
    </View>
  );
};

export default NewsHeader;
