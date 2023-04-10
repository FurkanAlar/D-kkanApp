import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64b5f6',
  },
  logo: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  logo_container: {
    flex: 1,
  },
  body_container: {},
});
