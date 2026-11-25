const MULTIPLIER = 16807
const MODULUS = 2147483647

export function createSeededRandom(seed: number): () => number {
  let state = seed

  return () => {
    state = (state * MULTIPLIER) % MODULUS
    return state / MODULUS
  }
}