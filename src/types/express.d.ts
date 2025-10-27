import "express";

declare global {
  namespace Express {
    interface User {
      id: number;
      permission: number;
      [key: string]: any;
    }

    interface Request {
      user?: User;
    }
  }
}
