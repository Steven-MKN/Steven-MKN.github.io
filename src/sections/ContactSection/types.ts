import { SocialLinkType } from "../../components/SocialLinkButton/types";
import { ContactInfoType } from "../../components/ContactInfo/types";

export type ContactSectionType = {
  readonly intro: string;
  readonly info: ContactInfoType[];
  readonly socialLinks: SocialLinkType[];
};
