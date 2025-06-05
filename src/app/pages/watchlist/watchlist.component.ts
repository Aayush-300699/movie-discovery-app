import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WatchlistService } from '../../services/watchlist.service';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  standalone: true,
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
  imports: [CommonModule, RouterModule]
})

export class WatchlistComponent {
  watchlist: any[] = [];

  constructor(private watchlistService: WatchlistService) {
    this.watchlist = this.watchlistService.getWatchlist();
  }

  removeFromWatchlist(id: number) {
    this.watchlistService.removeFromWatchlist(id);
    this.watchlist = this.watchlistService.getWatchlist(); // update UI
  }
}
