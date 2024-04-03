import { ADD_INFO_PROJECT } from '../constants/project';


export const cartoonInfoProject = (state = [], action) => {
    switch (action.type) {
        case ADD_INFO_PROJECT: {
            return [
                ...state,
                {
                    urlPhoto: action.urlPhoto,
                    title: action.title,
                    id: action.id,
                },
            ]
        } default: {
            return state;
        }
    }
}