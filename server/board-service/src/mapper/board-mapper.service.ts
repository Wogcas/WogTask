import { Injectable } from "@nestjs/common";
import { Board } from "src/entities/board.entity";
import { CreateBoardDTO } from "src/grpc/board";

@Injectable()
export class BoardMapperService {
    mapDtoToBoard(dto: CreateBoardDTO, userid: number) {
        const board = new Board();
        board.id = dto.id;
        board.userid = userid;
        board.title = dto.title;
        board.content = dto.content;
        board.createdAt = dto.createdAt ? new Date(dto.createdAt) : new Date();
        board.updatedAt = dto.updatedAt ? new Date(dto.updatedAt) : new Date();
        return board;
    }
}