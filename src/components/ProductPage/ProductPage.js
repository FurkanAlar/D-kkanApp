import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './ProductPage.styles';

const ProductPage = ({product, onselect}) => {
  return (
    <TouchableWithoutFeedback onPress={onselect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: product.image}} />
        <View style={styles.body_container}>
          <Text style={styles.title}> {product.title} </Text>

          <Text style={styles.price}> {product.price} USD </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductPage;
