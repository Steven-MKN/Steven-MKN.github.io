import {GlobalStateType} from "../../Store/types";
import {createSelector} from 'reselect';
import {FooterSectionType} from "./types";

const state = (globalState: GlobalStateType) => globalState

export const footerSectionSelector = createSelector(state, (s): FooterSectionType => {
    return {
        name: s.name,
        slogan: s.slogan,
        socialLinks: s.socialLinks,
    }
})
