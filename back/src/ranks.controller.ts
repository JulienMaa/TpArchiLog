import { Controller, Get, Param } from '@nestjs/common';
import { RanksService } from './ranks.service';
import { Ranks } from './interfaces/allRanks.interface';

@Controller('ranks')
export class RanksController {
  constructor(private readonly ranksService: RanksService) {}

  @Get(':game')
  findAllByGame(@Param('game') game: string): Ranks | null {
    return this.ranksService.findAllByGame(game);
  }
}
