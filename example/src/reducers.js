import {types} from './types.js'
const initialState = {
    files: [
        {id: 1, file: 'notes.txt', folder: 'txt'},
        {id: 2, file: 'book.pdf', folder: 'pdf'},
        {id: 3, file: 'cv.pdf', folder: 'pdf'},
        // more files ...
    ]
};

export default function fileReducer(state = initialState, action) {
    const payload = action.payload;
    switch (action.type) {
        case types.NEW_FILE:
            return {
                files: [
                    ...state.files,
                    
                ]
            };
        case types.DELETE_FILE:
            return {
                ...state.files,
            };
        default:
            return state;
    }
}