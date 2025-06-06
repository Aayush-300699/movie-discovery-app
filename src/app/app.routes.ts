import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'movie/:id', component: MovieDetailComponent },
    { path: 'watchlist', component: WatchlistComponent },
];
