export class BitPerm {
  static combine(...perms: number[]): number {
    return perms.reduce((acc, p) => acc | p, 0);
  }

  static has(perms: number, check: number): boolean {
    if (typeof perms !== "number" || typeof check !== "number") return false;
    return (perms & check) === check;
  }

  static add(perms: number, add: number): number {
    return perms | add;
  }

  static remove(perms: number, rem: number): number {
    return perms & ~rem;
  }

  static list(perms: number, all: Record<string, number>): string[] {
    return Object.entries(all)
      .filter(([_, val]) => (perms & val) === val)
      .map(([key]) => key);
  }

  static fromNames(names: string[], all: Record<string, number>): number {
    return names.reduce((acc, name) => acc | (all[name] ?? 0), 0);
  }
}
