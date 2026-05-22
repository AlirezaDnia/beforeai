import { BeforeAIConfig, GenerateOptions } from "../types"

export class BeforeAI {
  constructor(private config: BeforeAIConfig) {}

  async generate(options: GenerateOptions) {
    return "BeforeAI working"
  }
}