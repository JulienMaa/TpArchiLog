import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Home';
  games = [
    { name: 'Overwatch', imageUrl: '../assets/image/game_logo/overwatch.jpg', route: '/random' },
    { name: 'Fortnite', imageUrl: '../assets/image/game_logo/fortnite.jpg', route: '/random' },
    { name: 'Game 3', imageUrl: '', route: '' },
    { name: 'Game 4', imageUrl: '', route: '' },
    { name: 'Game 5', imageUrl: '', route: '' },
    { name: 'Game 6', imageUrl: '', route: '' }
  ];
}
