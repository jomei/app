import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Registration from './screens/Registration'
import Login from './screens/Login'
import Home from './screens/Home'
import CreateBox from './components/box/CreateBox'

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" initial={true} component={Login} title="Login"/>
        <Scene key="sign_up" component={Registration} title="Register"/>
        <Scene key="home" component={Home}/>
        <Scene key="create_box" component={CreateBox}/>
      </Stack>
    </Router>
  )
};

export default RouterComponent;