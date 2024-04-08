import { Module } from '@nestjs/common';
import { ClipsController } from './clips.controller';
import { ClipsService } from './clips.service';
import { RanksController, GamesController } from './ranks.controller';
import { RanksService } from './ranks.service';

@Module({
    controllers: [ClipsController, RanksController, GamesController],
    providers: [ClipsService, RanksService],
})

export class AppModule {}
