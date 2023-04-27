import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './Products.style';
import Config from 'react-native-config';
import axios from 'axios';

import ProductPage from '../../components/ProductPage';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error/Error';

const Products = ({navigation}) => {
  const {data, error, loading} = useFetch(Config.API_URL);

  const handleProductSelect = id => {
    navigation.navigate('Detail Page', {id});
  };

  const renderProduct = ({item}) => (
    <ProductPage product={item} onselect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <View>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};

export default Products;
