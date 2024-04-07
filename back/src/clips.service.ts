import { Injectable } from '@nestjs/common';
import { Clip } from './interfaces/clip.interface';
import { Rank } from './interfaces/rank.interface';

const path = "../data/clips.json";

@Injectable()
export class ClipsService {
    private readonly clipsData = require(path);

    findAllByGame(game: string): Clip[] {
        const gameClips = this.clipsData[game];
        if (!gameClips) return [];

        return gameClips[0].clips.map(({ id, youtube_embed_link }) => ({ id, youtube_embed_link }));
    }
    
    findByIdAndGame(game: string, id: number): Clip | null {
        const gameClips = this.clipsData[game];
        if (!gameClips) return null;
        
        const clip = gameClips[0].clips.find(clip => clip.id === id);
        return clip ? { id: clip.id, youtube_embed_link: clip.youtube_embed_link } : null;
    }

    findRandomClipByGame(game: string): Clip | null {
        const gameClips = this.clipsData[game];
        if (!gameClips) return null;
      
        const clips = gameClips[0].clips;
        if (clips.length === 0) return null;
      
        const randomIndex = Math.floor(Math.random() * clips.length);
        const { id, youtube_embed_link } = clips[randomIndex];
        return { id, youtube_embed_link };
    }

    findRankByIdAndGame(game: string, id: number): Rank | null {
        const gameClips = this.clipsData[game];
        if (!gameClips) return null;
      
        const clip = gameClips[0].clips.find(clip => clip.id === id);
        return clip ? { id: clip.id, rank: clip.rank } : null;
    }
      
}
