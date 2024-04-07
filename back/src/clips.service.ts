import { Injectable } from '@nestjs/common';
import { Clip } from './interfaces/clip.interface';

const path = "../data/clips.json";

@Injectable()
export class ClipsService {
    private readonly clipsData = require(path);

    findAllByGame(game: string): Clip[] {
        const gameClips = this.clipsData[game];
        if (!gameClips) return [];
        
        return gameClips[0].clips;
    }

    findByIdAndGame(game: string, id: number): Clip | null {
        const gameClips = this.clipsData[game];
        if (!gameClips) return null;

        const clips = gameClips[0].clips;
        return clips.find((clip) => clip.id === id) || null;
    }

    findRandomClipByGame(game: string): Clip | null {
        const gameClips = this.clipsData[game];
        if (!gameClips) return null;

        const clips = gameClips[0].clips;
        if (clips.length === 0) return null;

        const randomIndex = Math.floor(Math.random() * clips.length);
        return clips[randomIndex];
    }

}
