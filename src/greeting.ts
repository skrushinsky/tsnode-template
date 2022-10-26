export function greeting(name?: string): string {
  if (name === undefined) {
    name = 'Sir';
  }
  return `Hello, ${name}!`;
}
