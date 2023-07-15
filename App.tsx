import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from './View/Signup';
import SignIn from './View/SignIn';
import AuthDetails from './View/AuthDetails';

function App(): JSX.Element {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar
        barStyle='dark-content'
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="signup"
          component= {SignUp}
        />
        <Stack.Screen
          name="signin"
          component= {SignIn}
        />
        <Stack.Screen
          name="status"
          component= {AuthDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({

  highlight: {
    color:'blue',
    fontSize: 34,
    fontWeight: 'bold',
  },
});

export default App;