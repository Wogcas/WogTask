import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const ctx = context.switchToRpc();
        const data = ctx.getData();
        const metadata = ctx.getContext();
        const authHeader = metadata?.get('authorization')?.[0] || metadata?.get('Authorization')?.[0];

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new UnauthorizedException('No JWT token provided');
        }

        const token = authHeader.split(' ')[1];

        try {
            const jwtToken = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;
            const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET || 'your_jwt_secret');
            metadata.user = decoded;
            return true;
        } catch (err) {
            throw new UnauthorizedException('Invalid JWT token');
        }
    }
}