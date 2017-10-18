import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
// exporting many things at once
import * as actions from '../actions';

class ListItemComponent extends Component {
    render() {
        const { titleStyle } = styles;
        console.log(this.props);
        const { id, title } = this.props.library.item;
        return (
            <TouchableWithoutFeedback
            onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

/**
 * 1. dispatches all actions to redux store
 * 2. passes these actions as props to the component
 */
const ListItem = connect(null, actions)(ListItemComponent);
export default ListItem;
