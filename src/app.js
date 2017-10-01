import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    // to track user log in status
    state = { loggedIn: false };

    componentWillMount() {
        // Initialize firebase app
        firebase.initializeApp({
            apiKey: 'AIzaSyC9zXQ5D1FCuhXAisvWZxRxMJCn5BhfA3k',
            authDomain: 'authentication-2c0dd.firebaseapp.com',
            databaseURL: 'https://authentication-2c0dd.firebaseio.com',
            projectId: 'authentication-2c0dd',
            storageBucket: 'authentication-2c0dd.appspot.com',
            messagingSenderId: '117512028972'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // user is signed in
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    // to decide whether to display login form or logout button
    renderContent() {
        if (this.state.loggedIn) {
            return (
                <Button>
                    Log out
                </Button>
            );
        }

        return <LoginForm />;
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                this.renderContent();
            </View>
        );
    }
}

export default App;
