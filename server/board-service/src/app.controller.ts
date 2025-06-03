import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { BoardResponse, CreateBoardDTO } from './grpc/board';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @GrpcMethod('BoardService', 'CreateBoard')
  async create(dto: CreateBoardDTO, userid: number): Promise<BoardResponse> {
    return await this.appService.createBoard(dto, userid);
  }

}
