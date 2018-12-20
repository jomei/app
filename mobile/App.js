import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Router from './src/Router'
import { store, persistor } from './src/store';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// fetch(url)
//   .then(response => {
//     return response.json().then(data => {
//       if (response.ok) {
//         return data;
//       } else {
//         return Promise.reject({status: response.status, data});
//       }
//     });
//   })
//   .then(result => console.log('success:', result))
//   .catch(error => console.log('error:', error));


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router style={} />
        </PersistGate>
      </Provider>
    );
  }
}

