import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './listItem';

class LibraryListComponent extends Component {

    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        console.log(this.props);
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={(library) => this.renderRow(library)}
                keyExtractor={(library) => library.id}
            />
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    // returns an object that is mapped into props
    return { 
        libraries: state.libraries
    };
};

// export a connected component LibraryList
const LibraryList = connect(mapStateToProps)(LibraryListComponent);
export default LibraryList;
