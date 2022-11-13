import { GlobalStateType } from "../../Store/types";
import { createSelector } from "reselect";
import { AboutSectionType } from "./types";

const state = (globalState: GlobalStateType) => globalState;

export const aboutSectionSelector = createSelector(
  state,
  (s): AboutSectionType => {
    return {
      about: s.aboutText,
      skills: s.skills,
      resume: s.resume,
    };
  }
);
