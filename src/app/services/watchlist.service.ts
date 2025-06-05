import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WatchlistService {
    private storageKey = 'watchlist';

    getWatchlist(): any[] {
        const list = localStorage.getItem(this.storageKey);
        return list ? JSON.parse(list) : [];
    }

    addToWatchlist(movie: any): void {
        const list = this.getWatchlist();
        if (!list.find((m: any) => m.id === movie.id)) {
            list.push(movie);
            localStorage.setItem(this.storageKey, JSON.stringify(list));
        }
    }

    removeFromWatchlist(movieId: number): void {
        const list = this.getWatchlist().filter(m => m.id !== movieId);
        localStorage.setItem(this.storageKey, JSON.stringify(list));
    }

    isInWatchlist(movieId: number): boolean {
        return this.getWatchlist().some(m => m.id === movieId);
    }
}
