import OpenAI from "openai"

export class OpenRouterProvider {
  private client: OpenAI

  constructor(apiKey: string) {
    this.client = new OpenAI({
      apiKey,
      baseURL: "https://openrouter.ai/api/v1",
    })
  }

  async generate(prompt: string) {
    const response = await this.client.chat.completions.create({
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    })

    return response.choices[0].message.content ?? ""
  }
}