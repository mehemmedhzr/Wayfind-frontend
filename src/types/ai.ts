export interface AiKnownFact {
  key: string;
  label: string;
  value: string | number | null;
  source: "transcript" | "profile" | "userInput";
}

export interface AiMatch {
  universityName: string;
  programName: string;
  country: string;
  fitScorePercent: number;
  tuition?: string;
  languageRequirement?: string;
  deadline?: string;
  sourceUrl?: string;
  lastVerifiedAt?: string;
  isSourceVerified: boolean;
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  deadline?: string;
  isCompleted: boolean;
  order: number;
}
