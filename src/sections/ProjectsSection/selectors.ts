import {GlobalStateType} from "../../Store/types";
import {createSelector} from 'reselect';
import {ProjectsSectionType} from "./types";

const state = (globalState: GlobalStateType) => globalState

export const projectsSectionSelector = createSelector(state, (s): ProjectsSectionType => {
    return s.projects
})
