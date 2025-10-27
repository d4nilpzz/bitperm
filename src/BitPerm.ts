export class BitPerm {
  static combine(...perms: number[]): number {
    return perms.reduce((acc, p) => acc | p, 0);
  }

  static has(perms: number, check: number): boolean {
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
}
