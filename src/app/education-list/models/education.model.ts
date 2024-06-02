import { Activity } from "./activity.model";
import { CourseHighlight } from "./course-highlight.model";
import { DegreeInformation } from "./degree-information.model";
import { HonorAndAward } from "./honor-and-award.model";
import { MajorProject } from "./major-project.model";

export interface Education {
  educationName: string,
  educationAchievement: string;
  degreeInformation: DegreeInformation;
  activities: Activity[];
  honorsAndAwards: HonorAndAward[];
  courseHighlights: CourseHighlight[];
  majorProjects: MajorProject[];
}
