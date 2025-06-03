import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Repository } from 'typeorm';
import { CreateBoardDTO } from './grpc/board';
import { BoardMapperService } from './mapper/board-mapper.service';

@Injectable()
export class AppService {

  constructor(
    private readonly boardMapper: BoardMapperService,
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>
  ) { }

  async createBoard(dto: CreateBoardDTO, userid: number): Promise<Board> {
    try {
      const board = this.boardMapper.mapDtoToBoard(dto, userid);
      return await this.boardRepository.save(board);
    } catch (error) {
      throw error;
    }
  }
}
