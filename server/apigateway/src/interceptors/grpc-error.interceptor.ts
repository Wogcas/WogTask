import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class GrpcErrorInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError(error => {
                // Si ya es una RpcException, la dejamos pasar
                if (error instanceof RpcException) {
                    return throwError(() => error);
                }

                // Convertimos errores gRPC a RpcException
                if (error.code && error.details) {
                    return throwError(() => new RpcException({
                        code: error.code,
                        message: error.details
                    }));
                }

                // Para otros errores
                return throwError(() => error);
            })
        );
    }
}