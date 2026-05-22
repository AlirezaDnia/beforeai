import crypto from "crypto"

export function hashPrompt(prompt: string) {
  return crypto
    .createHash("sha256")
    .update(prompt)
    .digest("hex")
}