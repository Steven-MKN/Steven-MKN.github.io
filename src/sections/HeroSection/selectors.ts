import { GlobalStateType } from "../../Store/types";
import { createSelector } from "reselect";
import { HeroSectionType } from "./types";

const state = (globalState: GlobalStateType) => globalState;

export const heroSectionSelector = createSelector(
  state,
  (s): HeroSectionType => {
    return {
      name: s.name,
      headline: s.headline,
      socialLinks: s.socialLinks,
    };
  }
);
