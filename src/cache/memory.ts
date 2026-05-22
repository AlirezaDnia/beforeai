export class MemoryCache {
  private cache = new Map<string, string>()

  get(key: string) {
    return this.cache.get(key)
  }

  set(key: string, value: string) {
    this.cache.set(key, value)
  }
}