# BeforeAI

A lightweight AI middleware layer for caching and optimizing LLM requests.

BeforeAI is a TypeScript SDK that sits between your application and LLM providers (via OpenRouter) to reduce cost, eliminate duplicate requests, and improve response latency.

---

## Why BeforeAI?

Modern AI applications often face these problems:

- Repeated identical LLM requests
- High API costs
- No caching layer
- No abstraction over AI providers

BeforeAI solves this by adding a minimal middleware layer between your app and AI providers.

---

## Features

- ⚡ In-memory response caching
- 🔁 Request deduplication (hash-based)
- 🌐 OpenRouter integration
- 🧠 SHA-256 prompt hashing
- 📦 Minimal and developer-friendly SDK

---

## Architecture

User Request  
→ BeforeAI SDK  
→ SHA-256 Hash Generation  
→ Cache Lookup  
    → HIT: return cached response  
    → MISS: call OpenRouter API  
→ Store response in cache  
→ Return result

---

## Installation

```bash
npm install beforeai
```

> Note: This project is currently in local development and not yet published to npm.

---

## Usage

```ts
import "dotenv/config"
import { BeforeAI } from "./src"

const ai = new BeforeAI({
  apiKey: process.env.OPENROUTER_API_KEY!,
})

async function run() {
  const res1 = await ai.generate({
    prompt: "Explain React hooks in simple terms"
  })

  console.log(res1)

  const res2 = await ai.generate({
    prompt: "Explain React hooks in simple terms"
  })

  console.log(res2)
}

run()
```

---

## Example Output

```
[BeforeAI] request sent
[BeforeAI] cache hit
```

---

## Tech Stack

- TypeScript
- Node.js
- OpenAI SDK (via OpenRouter)
- SHA-256 hashing
- In-memory cache (Map)

---

## Roadmap

- Semantic caching (embedding-based similarity)
- Multi-provider routing (OpenAI / Claude / Gemini)
- Persistent cache (Redis support)
- Request batching and deduplication at scale
- CLI tool for testing prompts

---

## Design Philosophy

- Minimal API surface
- Zero configuration by default
- Developer-first DX
- Extensible provider system

---

## License

MIT
