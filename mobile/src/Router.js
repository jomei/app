import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import AuthScreen from 'mobile/src/screens/AuthScreen'
import Home from 'mobile/src/screens/Home'


export default () => {
  return (
    <Router hideNavBar={true} >
      <Stack>
        <Scene key="auth" initial={true} component={AuthScreen} />
        <Scene key="home" component={Home} />
      </Stack>
    </Router>
  )
};