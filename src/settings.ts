import { ChatModels, ChatModelDisplayNames, OnboardingStatus } from "@/constants";

export interface SRSettings {
  defaultModel: ChatModels;
  defaultModelDisplayName: ChatModelDisplayNames;
  openAIApiKey: string;
  openAIBaseURL: string;
  customModelId: string;
	inlineSeparator: string;
	multilineSeparator: string;
  includeCurrentFile: boolean;
  onboardingStatus: OnboardingStatus;
}
