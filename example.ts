import { BeforeAI } from "./src"

const ai = new BeforeAI({
  apiKey: "test"
})

async function main() {
  const result = await ai.generate({
    prompt: "Explain React hooks"
  })

  console.log(result)
}

main()