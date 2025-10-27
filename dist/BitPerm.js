export class BitPerm {
    static combine(...perms) {
        return perms.reduce((acc, p) => acc | p, 0);
    }
    static has(perms, check) {
        return (perms & check) === check;
    }
    static add(perms, add) {
        return perms | add;
    }
    static remove(perms, rem) {
        return perms & ~rem;
    }
    static list(perms, all) {
        return Object.entries(all)
            .filter(([_, val]) => (perms & val) === val)
            .map(([key]) => key);
    }
}
