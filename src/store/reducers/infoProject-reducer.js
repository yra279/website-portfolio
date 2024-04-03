import { ADD_INFO_PROJECT } from "../constants/project";

export const infoProject = (state = [], action) => {
    switch (action.type) {
        case ADD_INFO_PROJECT: {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    urlImg: action.urlPhoto,
                    stack: action.stack,
                    gitHubLink: action.gitHubLink,
                },
            ]
        } default: {
            return state;
        }
    }
}