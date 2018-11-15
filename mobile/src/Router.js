import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import AuthScreen from './screens/AuthScreen'


export default () => {
  return (
    <Router hideNavBar={true} >
      <Stack>
        <Scene key="auth" initial={true} component={AuthScreen}   hideNavBar={true}/>
      </Stack>
    </Router>
  )
};