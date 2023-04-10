import {View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Input.style';

const Input = ({placeholder, value, onType, iconName, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
      />
      <Icon name={iconName} size={30} color="gray" />
    </View>
  );
};

export default Input;
