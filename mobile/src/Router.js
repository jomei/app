import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Auth from 'mobile/src/components/auth/Screen'
import Guard from 'mobile/src/components/auth/Guard'
import Home from 'mobile/src/components/home/Screen'
import CreateBox from 'mobile/src/components/createBox/Screen'
import BoxScreen from 'mobile/src/components/box/Screen'


export default () => {
  return (
    <Router hideNavBar={true} >
      <Stack>
        <Scene key='guard' component={Guard} initial={true}/>
        <Scene key='auth' component={Auth} />
        <Scene key='home' component={Home} />
        <Scene key='createBox' component={CreateBox}/>
        <Scene key='box' component={BoxScreen}/>
      </Stack>
    </Router>
  )
};