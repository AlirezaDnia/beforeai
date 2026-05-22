import { BeforeAIConfig, GenerateOptions } from "../types";
import { MemoryCache } from "../cache/memory";
import { hashPrompt } from "../utils/hash";
import { OpenRouterProvider } from "../providers/openrouter";

export class BeforeAI {
    private cache = new MemoryCache();
    private provider: OpenRouterProvider;

    constructor(private config: BeforeAIConfig) {
        this.provider = new OpenRouterProvider(config.apiKey);
    }

    async generate(options: GenerateOptions) {
        const key = hashPrompt(options.prompt);

        const cached = this.cache.get(key);

        if (cached) {
            console.log(`[BeforeAI] cache hit`);
            return cached;
        }

        console.log(`[BeforeAI] request sent`);

        const response = await this.provider.generate(options.prompt);

        this.cache.set(key, response);

        return response;
    }
}
