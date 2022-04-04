import React, {useState, useEffect} from 'react';
import {Text, View, Alert} from 'react-native';

import qs from 'query-string';

import NewsContent from '_organisms/newsContent';
import NewsHeader from '_organisms/newsHeader';
import {getNews} from '_services/newsAPI';

const initialQuery = {
  sortBy: 'relevance',
  pageSize: 15,
};

const Landing = props => {
  const [loading, setLoading] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [search, setSearch] = useState('');

  const onFetchingNews = async () => {
    if (search.length > 1) {
      setLoading(true);
      const query = {q: search, ...initialQuery};
      // do something
      try {
        const gettingNews = await getNews('?' + qs.stringify(query)).then(
          res => res.data.articles,
        );
        // console.log(gettingNews);
        setNewsList(gettingNews);
      } catch (e) {
        Alert.alert('Fetching News Error', e.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    } else {
      Alert.alert(
        'Pencarian Tidak Valid',
        'Minimal 2 karakter untuk pencarian',
      );
    }
  };

  return (
    <View style={{flex: 1}}>
      <NewsHeader
        onChangeInput={val => setSearch(val)}
        onSearch={onFetchingNews}
        searchValue={search}
        loading={loading}
      />
      <NewsContent loading={loading} list={newsList} />
    </View>
  );
};

export default Landing;
