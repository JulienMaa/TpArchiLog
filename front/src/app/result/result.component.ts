import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  title = 'Result';
  game = "";
  guess = "";
  answer = "";
  clipID: number = 0;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.game = params['game'];
      this.guess = params['guess'];
      this.clipID = params['idClip'];
      this.fetchRank();
    });
  }

  fetchRank(): void {
    this.http.get<any>(`http://localhost:3000/clips/${this.game}/getRankFromId/${this.clipID}`).subscribe(
      (clip: any) => {
        this.clipID = clip.id;
        this.answer = clip.rank;
      }
    );
  }
}
