import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  title = 'Random';
  youtubeVideoLink: SafeResourceUrl = '';
  clipID: number = 0;
  allRanks: any[] = [];
  game = "";

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.game = params['game'];
      this.fetchRandomClipForGame();
      this.fetchRanksButtons();
    });
  }

  fetchRandomClipForGame(): void {
    this.http.get<any>(`http://localhost:3000/clips/${this.game}/random`).subscribe(
      (clip: any) => {
        this.clipID = clip.id;
        this.setYouTubeVideoLink(clip.youtube_embed_link);
      }
    );
  }

  setYouTubeVideoLink(clip: string): void {
    this.youtubeVideoLink = this.sanitizer.bypassSecurityTrustResourceUrl(clip);
  }

  fetchRanksButtons(): void {
    this.http.get<any[]>(`http://localhost:3000/ranks/${this.game}`).subscribe(data => {
      this.allRanks = data;
    });
  }

  onGameButtonClick(rank: string): void {
    this.router.navigateByUrl('/result?game=' + this.game + '&idClip=' + this.clipID + '&guess=' + rank);
  }
}
