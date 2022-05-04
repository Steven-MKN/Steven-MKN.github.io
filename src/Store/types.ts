import {SkillBadgeType} from "../components/SkillBadge/types";
import {ResumeType} from "../components/Resume/types";
import {SocialLinkType} from "../components/SocialLinkButton/types";
import {ContactInfoType} from "../components/ContactInfo/types";
import {ProjectType} from "../components/Project/types";

export type GlobalStateType = {
    readonly darkMode: boolean;
    readonly aboutText: string[];
    readonly skills: SkillBadgeType[];
    readonly resume: ResumeType;
    readonly name: string;
    readonly slogan: string;
    readonly socialLinks: SocialLinkType[];
    readonly contactMessage: string;
    readonly contactInfo: ContactInfoType[];
    readonly headline: string;
    readonly projects: ProjectType[];
}
