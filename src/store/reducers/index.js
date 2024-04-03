import { combineReducers } from "redux";
import { cartoonInfoProject } from "./cartoonInfoProject-reducer";
import { infoProject } from "./infoProject-reducer";


export const rootRecucer = combineReducers({
    cartoonInfoProject,
    infoProject,
});