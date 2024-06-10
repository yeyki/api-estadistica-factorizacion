import { NextFunction, Request, Response } from "express";
// import logger from "../logger";

export function loggerRequest(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.log(
    `METHOD: ${req.method} - URL: ${req.originalUrl} - BODY: ${JSON.stringify(
      req.body ?? {}
    )}`
  );
  return next();
}
