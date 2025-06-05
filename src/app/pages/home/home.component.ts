import { Component } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TmdbService } from '../../core/services/tmdb.service';
import { WatchlistService } from '../../services/watchlist.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, NavigationEnd } from '@angular/router';



@Component({
    standalone: true,
    selector: 'app-home',
    imports: [CommonModule, NgIf, NgFor, RouterModule, FormsModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    movies: any[] = [];
    loading = false;
    searchTerm = '';

    constructor(private tmdb: TmdbService, private watchlist: WatchlistService, private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                console.log('Navigation ended. Current path:', event.urlAfterRedirects);
            }
        });
    }

    getMoviesByMood(genreId: string) {
        this.loading = true;
        this.tmdb.getMoviesByCategory(genreId).subscribe((res: any) => {
            this.movies = res.results || [];
            this.loading = false;
        });
    }

    searchMovies() {
        const trimmedTerm = this.searchTerm.trim();
        if (!trimmedTerm) {
            this.movies = [];
            return;
        }
        this.loading = true;
        this.tmdb.searchMovies(trimmedTerm).subscribe((res: any) => {
            this.movies = res.results || [];
            this.loading = false;
        });
    }

    toggleWatchlist(movie: any) {
        if (this.watchlist.isInWatchlist(movie.id)) {
            this.watchlist.removeFromWatchlist(movie.id);
        } else {
            this.watchlist.addToWatchlist(movie);
        }
    }

    isInWatchlist(id: number): boolean {
        return this.watchlist.isInWatchlist(id);
    }

    goToWatchlist() {
        this.router.navigate(['/watchlist']);
    }


}
