import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import SignIn from './components/auth/SignIn'


export default () => {
  return (
    <Router>
      <Stack>
        <Scene key="signIn" initial={true} component={SignIn} title="SignIn"/>
      </Stack>
    </Router>
  )
};