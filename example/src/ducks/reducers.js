import {types} from './types'
const initialState = {
    files: [
        {id: 1, issuer: 'nyxycy', book: 'abc', spread: "abc", fee: "abc", prem: "discounted"}
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