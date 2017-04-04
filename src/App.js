import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAY2QeEtFquPPOhDLAtCK4QySzghVAUO-o",
      authDomain: "manager-f1045.firebaseapp.com",
      databaseURL: "https://manager-f1045.firebaseio.com",
      storageBucket: "manager-f1045.appspot.com",
      messagingSenderId: "45825210400"
    };
  firebase.initializeApp(config);
  }
  render(){
    const store=createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
export default App;
