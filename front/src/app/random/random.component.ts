import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {
  title = 'Random';
  games: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let game;
    this.route.queryParams.subscribe(params => {
      game = params['game'];
    });
    console.log(game);
  }
}
