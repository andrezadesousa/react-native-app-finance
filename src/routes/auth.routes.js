import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SingIn} />

      <AuthStack.Screen name="SignUp" component={SingUp} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
