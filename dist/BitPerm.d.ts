export declare class BitPerm {
    static combine(...perms: number[]): number;
    static has(perms: number, check: number): boolean;
    static add(perms: number, add: number): number;
    static remove(perms: number, rem: number): number;
    static list(perms: number, all: Record<string, number>): string[];
}
