import { ADD_INFO_PROJECT } from "../constants/project";

export const projectInfoAdd = ({ urlPhoto, title, id, text }) => ({
    type: ADD_INFO_PROJECT,
    urlPhoto,
    title,
    id,
    text,
});