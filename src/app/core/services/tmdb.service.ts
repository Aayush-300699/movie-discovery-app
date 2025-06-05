import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TmdbService {
    private apiKey = environment.tmdbApiKey;
    private baseUrl = environment.tmdbBaseUrl;

    constructor(private http: HttpClient) { }

    searchMovies(query: string) {
        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('query', query);
        return this.http.get(`${this.baseUrl}/search/movie`, { params });
    }

    getMoviesByCategory(category: string) {
        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('with_genres', category);
        return this.http.get(`${this.baseUrl}/discover/movie`, { params });
    }


    getMovieDetails(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=en-US`);
    }

    getMovieCast(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
    }

    getMovieVideos(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}&language=en-US`);
    }

    getSimilarMovies(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}&language=en-US&page=1`);
    }
}
