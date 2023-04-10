import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login/Login';
import {useDispatch, useSelector} from 'react-redux';
import Loading from './components/Loading/Loading';
import {Icon} from 'react-native-vector-icons/Icon';

const Stack = createNativeStackNavigator();

const App = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthloading);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="ProductsPage"
            component={Products}
            options={{
              title: 'Dükkan',
              headerTitleAlign: 'center',
              headerStyle: {backgroundColor: '#64b5f6'},
              headerTitleStyle: {color: 'white'},
              headerRight: () => (
                <Icon
                  name="Logout"
                  size={30}
                  color="white"
                  onPress={() => dispatch({type: 'REMOVE_USER'})}
                />
              ),
            }}
          />

          <Stack.Screen
            name="DetailPage"
            component={Detail}
            options={{
              title: 'Detay',
              headerTitleAlign: 'center',
              headerStyle: {backgroundColor: '#64b5f6'},
              headerTitleStyle: {color: 'white'},
              headerTintColor: 'white',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default App;
