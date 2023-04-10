import React from 'react';
import {FlatList, View} from 'react-native';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';

import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../../components/Error/Error';
import {useDispatch} from 'react-redux';
const Products = ({navigation}) => {
  const dispatch = useDispatch();
  const {error, loading, data} = useFetch(Config.API_PRODUCT_URL);

  const handleProducySelect = id => {
    navigation.navigate('DetailPage', {id});
  };
  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProducySelect(item.id)} />
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return <FlatList data={data} renderItem={renderProduct} />;
};

export default Products;
