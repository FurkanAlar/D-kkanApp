import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = ({findProduct}) => {
  return (
    <View styles={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={findProduct}
        placeholder="search"
      />
    </View>
  );
};

export default SearchBar;
