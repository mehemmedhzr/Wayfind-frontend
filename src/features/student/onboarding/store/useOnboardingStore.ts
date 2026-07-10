// TODO: persist answers via studentService once the profile API exists;
// state currently lives only in memory for the duration of the session.
import { create } from "zustand";
import type { OnboardingStepId } from "../config/steps";
import type { AcademicInfoSchemaType } from "../schemas/academicInfo";
import type { GoalsSchemaType } from "../schemas/goals";
import type { InterestsSchemaType } from "../schemas/interests";
import type { PersonalInfoSchemaType } from "../schemas/personalInfo";

export type OnboardingAnswers = {
  personal: Partial<PersonalInfoSchemaType>;
  academic: Partial<AcademicInfoSchemaType>;
  goals: Partial<GoalsSchemaType>;
  interests: Partial<InterestsSchemaType>;
};

type TranscriptMeta = {
  fileName: string;
  sizeMb: number;
};

type OnboardingState = {
  answers: OnboardingAnswers;
  completedSteps: Record<OnboardingStepId, boolean>;
  transcript: TranscriptMeta | null;
  setPersonalInfo: (data: PersonalInfoSchemaType) => void;
  setAcademicInfo: (data: AcademicInfoSchemaType) => void;
  setGoals: (data: GoalsSchemaType) => void;
  setInterests: (data: InterestsSchemaType) => void;
  setTranscript: (transcript: TranscriptMeta | null) => void;
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  answers: { personal: {}, academic: {}, goals: {}, interests: {} },
  completedSteps: {
    personal: false,
    academic: false,
    goals: false,
    interests: false,
  },
  transcript: null,
  setPersonalInfo: (data) =>
    set((state) => ({
      answers: { ...state.answers, personal: data },
      completedSteps: { ...state.completedSteps, personal: true },
    })),
  setAcademicInfo: (data) =>
    set((state) => ({
      answers: { ...state.answers, academic: data },
      completedSteps: { ...state.completedSteps, academic: true },
    })),
  setGoals: (data) =>
    set((state) => ({
      answers: { ...state.answers, goals: data },
      completedSteps: { ...state.completedSteps, goals: true },
    })),
  setInterests: (data) =>
    set((state) => ({
      answers: { ...state.answers, interests: data },
      completedSteps: { ...state.completedSteps, interests: true },
    })),
  setTranscript: (transcript) => set({ transcript }),
}));
