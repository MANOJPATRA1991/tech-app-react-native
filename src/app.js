import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyC9zXQ5D1FCuhXAisvWZxRxMJCn5BhfA3k',
            authDomain: 'authentication-2c0dd.firebaseapp.com',
            databaseURL: 'https://authentication-2c0dd.firebaseio.com',
            projectId: 'authentication-2c0dd',
            storageBucket: 'authentication-2c0dd.appspot.com',
            messagingSenderId: '117512028972'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
