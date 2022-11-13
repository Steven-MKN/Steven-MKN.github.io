import { GlobalStateType } from "../../Store/types";
import { createSelector } from "reselect";
import { ContactSectionType } from "./types";

const state = (globalState: GlobalStateType) => globalState;

export const contactSectionSelector = createSelector(
  state,
  (s): ContactSectionType => {
    return {
      socialLinks: s.socialLinks,
      intro: s.contactMessage,
      info: s.contactInfo,
    };
  }
);
