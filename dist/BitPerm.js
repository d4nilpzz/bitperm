export class BitPerm {
    static combine(...perms) {
        return perms.reduce((acc, p) => acc | p, 0);
    }
    static has(perms, check) {
        if (typeof perms !== "number" || typeof check !== "number")
            return false;
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
    static fromNames(names, all) {
        return names.reduce((acc, name) => acc | (all[name] ?? 0), 0);
    }
}
