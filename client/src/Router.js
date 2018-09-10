import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Auth from './screens/Auth'
import Registration from './screens/Registration'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene
        key="auth"
      >
        <Scene
          key="Registration"
          title="Please Reg"
          component={Registration}
          initial
        />
      </Scene>
    </Router>
  )
};

export default RouterComponent;