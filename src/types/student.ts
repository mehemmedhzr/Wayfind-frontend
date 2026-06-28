import type { DegreeLevel } from "./roles";

export interface StudentProfile {
  id: string;
  userId: string;
  fullName: string;
  email: string;
  phone?: string;
  currentEducationLevel?: string;
  gpa?: number;
  fieldOfStudy?: string;
  degreeTarget?: DegreeLevel;
  targetCountries?: string[];
  budget?: number;
  intakeYear?: number;
  certificateType?: string;
  certificateScore?: number;
  interests?: string[];
  hasTranscript: boolean;
  profileCompletionPercent: number;
}
