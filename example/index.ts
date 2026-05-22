import "dotenv/config"
import { BeforeAI } from "../src"

const ai = new BeforeAI({
  apiKey: process.env.OPENROUTER_API_KEY!,
})

async function run() {
  console.log("FIRST CALL")

  const r1 = await ai.generate({
    prompt: "Explain React hooks in one sentence"
  })

  console.log("RESULT 1:", r1)

  console.log("\nSECOND CALL (should hit cache)")

  const r2 = await ai.generate({
    prompt: "Explain React hooks in one sentence"
  })

  console.log("RESULT 2:", r2)
}

run()