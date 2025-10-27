<div align="center">
  <h1>Bitperm</h1>
  <a href="https://www.npmjs.com/package/bitperm"><img src="https://img.shields.io/npm/v/unusual-cache" /></a>
  <a href="https://github.com/d4nilpzz/bitperm/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" /></a>
  <a href="https://discord.d4nilpzz.dev"><img alt="Discord" src="https://img.shields.io/discord/1373385570965000292?label=Discord"></a>
  <br />
  <br />
  <a href="https://www.npmjs.com/package/bitperm">npm</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/d4nilpzz/bitperm#instalation">Instalation</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/d4nilpzz/bitperm">docs</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://discord.d4nilpzz.dev">discord</a>
  <br />
  <br />
</div>

### What is Bitperm?
Bitperm is a lightweight and efficient permission management library based on bitwise operations.
It allows you to assign and check user permissions using integers, making it extremely fast, compact, and easy to integrate into any Node.js or Express project.

### Features

🧩 Bitmask-based permission system

⚡ Super-fast checks using bitwise operations

🧠 Full TypeScript support

🔐 Express middleware for route protection

🪶 Minimal and dependency-free

<br />

### Installation
```bash
npm install bitperm
```

### Usage
 - Define your permissions

```ts
import { BitPerm } from "bitperm";

export const PERMS = {
  COMMENT_VIEW: 1 << 1,     // 2
  COMMENT_CREATE: 1 << 2,   // 4
  COMMENT_DELETE: 1 << 3,   // 8
};
```
 - Combine permissions for a user

```ts
let userPermissions = BitPerm.combine(PERMS.COMMENT_VIEW);
// userPermissions = 2
```
 - Check permissions

```ts
BitPerm.has(userPermissions, PERMS.COMMENT_VIEW);   // true
```
 - Add or remove permissions

```ts
userPermissions = BitPerm.add(userPermissions, PERMS.COMMENT_DELETE);
userPermissions = BitPerm.remove(userPermissions, PERMS.COMMENT_CREATE);
```
 - List all permissions

```ts
BitPerm.list(userPermissions, PERMS); 
// Returns: ['COMMENT_VIEW', 'COMMENT_DELETE']
```

<br />

### Express Middleware
Protect routes with required permissions.

```ts
import express from "express";
import { BitPerm, requirePermission } from "bitperm";

const app = express();

const PERMS = {
  COMMENT_VIEW: 1 << 1,
  COMMENT_CREATE: 1 << 2,
  COMMENT_DELETE: 1 << 3,
};

// Simulated auth middleware
app.use((req, res, next) => {
  req.user = { id: 1, permission: BitPerm.combine(PERMS.COMMENT_VIEW, PERMS.COMMENT_CREATE) };
  next();
});

app.get("/comments", requirePermission(PERMS.COMMENT_VIEW), (req, res) => {
  res.json({ message: "You can view comments" });
});

app.post("/comments", requirePermission(PERMS.COMMENT_CREATE), (req, res) => {
  res.json({ message: "You can create comments" });
});

app.delete("/comments", requirePermission(PERMS.COMMENT_DELETE), (req, res) => {
  res.json({ message: "You can delete comments" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

### Publishing & Maintenance

Increment versions with `npm version patch|minor|major`#

Build with `npm run build`

Publish with `npm publish`