import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const JWT = "CHINATOWNUSHDUS";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

class AuthMiddleware {
  public async verifyToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).send({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, JWT);

      (req as CustomRequest).token = decoded;

      return next();
    } catch (error) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
  }
}
