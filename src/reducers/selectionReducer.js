/**
 * Initially state will be undefined;
 * to avoid returning undefined from the reducer
 * assign state to null
 */

export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
