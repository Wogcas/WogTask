import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Board } from "./entities/board.entity";
import { BoardMapperService } from "./mapper/board-mapper.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Board])],
    controllers: [AppController],
    providers: [AppService, BoardMapperService]
})
export class BoardModule { }
