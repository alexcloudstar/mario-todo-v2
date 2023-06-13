import { Request, Response } from 'express';

export function getStatus(req: Request, res: Response): Response {
  return res.status(200).send({ ok: true });
}
