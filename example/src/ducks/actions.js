import {types} from './types'
export const actions = {
    newFile(folder) {
        return {
            type: types.NEW_FILE,
            payload: {folder}
        };
    },
    deleteFiles(id) {
        return {
            type: types.DELETE_FILES,
            payload: {id}
        };
    }
};