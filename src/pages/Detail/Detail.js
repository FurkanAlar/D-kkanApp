import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Detail.style';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error';
const Detail = ({route}) => {
  const {id} = route.params;
  const {error, data, loading} = useFetch(`${Config.API_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}> {data.title} </Text>
        <Text style={styles.desc}> {data.description} </Text>
        <Text style={styles.price}> {data.price} USD </Text>
      </View>
    </View>
  );
};

export default Detail;
