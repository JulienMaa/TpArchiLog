import { Controller, Get, Param } from '@nestjs/common';
import { ClipsService } from './clips.service';
import { Clip } from './interfaces/clip.interface';
import { Rank } from './interfaces/rank.interface';

@Controller('clips')
export class ClipsController {
    constructor(private readonly clipsService: ClipsService) {}

    @Get(':game/random')
    findRandomClipByGame(@Param('game') game: string): Clip | null {
        return this.clipsService.findRandomClipByGame(game);
    }

    @Get(':game/getRankFromId/:id')
    findRankByIdAndGame(@Param('game') game: string, @Param('id') id: string): Rank | null {
        return this.clipsService.findRankByIdAndGame(game, +id);
    }

    @Get(':game/:id')
    findByIdAndGame(@Param('game') game: string, @Param('id') id: string): Clip | null {
        return this.clipsService.findByIdAndGame(game, +id);
    }

    @Get(':game')
    findAllByGame(@Param('game') game: string): Clip[] {
        return this.clipsService.findAllByGame(game);
    }
}
