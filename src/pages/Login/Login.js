import {SafeAreaView, View, Image, Alert} from 'react-native';
import React from 'react';
import styles from './Login.style';
import {Formik} from 'formik';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import usePost from '../../hooks/usePost/usePost';

const Login = ({navigation}) => {
  const {loading, error, post, data} = usePost();
  const dispatch = useDispatch();

  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/login', values);
  }
  if (error) {
    Alert.alert('Dükkan', 'Bir hata oluştu!');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Dükkan', 'Kullanici Bulunamadi!');
    } else {
      dispatch({type: 'SET_USER', payload: user});

      navigation.navigate('ProductsPage');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assent/login-logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.logo_container}>
            <Input
              placeholder="Kullanici adinizi giriniz..."
              value={values.username}
              onType={handleChange('username')}
              iconName="user"
            />

            <Input
              placeholder="Şifrenizi giriniz..."
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />

            <Button
              text="Giriş yap!!"
              onPress={handleSubmit}
              loading={loading}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
