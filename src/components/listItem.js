import React, { Component } from 'react';
import { 
    Platform,
    UIManager,
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation 
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
// exporting many things at once
import * as actions from '../actions';

class ListItemComponent extends Component {

    constructor() {
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && 
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    // called whenever the component is 
    // about to be rerendered to the device
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;
        // Show description for only the selected item
        // if expanded is true
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex:1 }}>{library.item.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
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
                    {this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;
    return { expanded };
};

/**
 * 1. dispatches all actions to redux store
 * 2. passes these actions as props to the component
 */
const ListItem = connect(mapStateToProps, actions)(ListItemComponent);
export default ListItem;
