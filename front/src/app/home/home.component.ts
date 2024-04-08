import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Home';
  games: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/games').subscribe(data => {
      data.forEach((item: string) => {
        const game = {
          name: item.toUpperCase(),
          imageUrl: `../assets/image/game_logo/${item}.jpg`,
          route: '/random?game=' + item,
        };
        this.games.push(game);
      });
      if (this.games.length % 3 !== 0) {
        const game = {
          name: "COMING SOON",
          imageUrl: `../assets/image/game_logo/template.jpg`,
          route: ''
        };
        this.games.push(game);
      }
    });
  }
  
}
