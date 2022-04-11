import {ResumeSectionType} from "../ResumeSection/types";

export type ResumeType = {
  readonly summary: string;
  readonly sections: ResumeSectionType[];
}
