import { BedrockChatParametersInput } from "./lib/utils/parameter-models";

export const bedrockChatParams = new Map<string, BedrockChatParametersInput>();
// You can define multiple environments and their parameters here
// bedrockChatParams.set("dev", {});

// Default environment with pulso-salud prefix
bedrockChatParams.set("default", {
  envPrefix: "pulscrp-ia01-adoc-adp",
});
