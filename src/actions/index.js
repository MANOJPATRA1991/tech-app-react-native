/**
 * The arrow function here is the action creator
 * 
 * Whenever we call this action creator,
 * the returned action will be dispatched and sent off for us to
 * all the different reducers.
 */

/**
 * Whenever we are exporting many things, we don't use the default keyword
 */
export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};
