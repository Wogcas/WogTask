import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { status as GrpcStatus } from '@grpc/grpc-js';
import { Response } from 'express';

@Catch()
export class GrpcExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        // Si es un error gRPC directo
        if (exception.code && exception.details) {
            const statusCode = this.mapGrpcCodeToHttp(exception.code);
            return response.status(statusCode).json({
                statusCode,
                message: exception.details,
                error: GrpcStatus[exception.code] || 'Internal Server Error'
            });
        }

        // Si es una RpcException
        if (exception instanceof RpcException) {
            const error = exception.getError() as { code: number; message: string };
            const statusCode = this.mapGrpcCodeToHttp(error.code);
            return response.status(statusCode).json({
                statusCode,
                message: error.message,
                error: GrpcStatus[error.code] || 'Internal Server Error'
            });
        }

        // Para otros tipos de errores
        response.status(500).json({
            statusCode: 500,
            message: 'Internal server error',
            error: 'Internal Server Error'
        });
    }

    private mapGrpcCodeToHttp(grpcCode: number): number {
        const codeMap: Record<number, number> = {
            [GrpcStatus.UNAUTHENTICATED]: 401,
            [GrpcStatus.NOT_FOUND]: 404,
            [GrpcStatus.ALREADY_EXISTS]: 409,
            [GrpcStatus.INVALID_ARGUMENT]: 400,
            [GrpcStatus.PERMISSION_DENIED]: 403,
            [GrpcStatus.INTERNAL]: 500,
        };
        return codeMap[grpcCode] || 500;
    }
}