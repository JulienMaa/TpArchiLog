import { Injectable } from '@nestjs/common';
import { Ranks } from './interfaces/allRanks.interface';

const path = "../data/ranks.json";

@Injectable()
export class RanksService {
  private readonly ranksData = require(path);

  getGameNames(): string[] {
    return Object.keys(this.ranksData);
  }

  findAllByGame(game: string): Ranks | null {
    const gameRanks = this.ranksData[game];
    return gameRanks || null;
  }
}
