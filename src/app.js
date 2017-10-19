import React, { Component } from 'react';
import { View } from 'react-native';

/**
 * Provider is a JSX component used to magically
 * make the store available to all container components
 * in the application without passing it explicitly. 
 */
import { Provider } from 'react-redux';

/**
 * createStore returns a Redux store to read state, dispatch actions
 * and subscribe to changes
 */
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/libraryList';

class App extends Component {
    render() {
        return (
            // Provider is for facilitating communication
            // between react and redux
            <Provider store={createStore(reducers)}>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <Header headerText="Tech Stack" />
                    <LibraryList />
                </View>
            </Provider>
        );
    }
}

export default App;
