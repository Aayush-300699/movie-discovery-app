import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TmdbService } from '../../core/services/tmdb.service';
import { NgIf, NgFor } from '@angular/common';
import { SafeUrlPipe } from '../../shared/pipes/safe-url.pipe';


@Component({
    standalone: true,
    selector: 'app-movie-detail',
    imports: [CommonModule, RouterModule, NgIf, NgFor, SafeUrlPipe],
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private tmdb = inject(TmdbService);

    movieId!: number;

    movie: any = null;
    cast: any[] = [];
    trailerKey: string | null = null;
    similar: any[] = [];
    loading = true;

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.movieId = params['id'];
            this.fetchMovieDetails();
        });
    }

    fetchMovieDetails() {
        this.loading = true;
        this.tmdb.getMovieDetails(this.movieId).subscribe(movie => {
            this.movie = movie;

            this.tmdb.getMovieCast(this.movieId).subscribe(castData => {
                this.cast = castData.cast.slice(0, 6); // top 6 cast

                this.tmdb.getMovieVideos(this.movieId).subscribe(videoData => {
                    const trailer = videoData.results.find((v: any) => v.type === 'Trailer' && v.site === 'YouTube');
                    this.trailerKey = trailer ? trailer.key : null;

                    this.tmdb.getSimilarMovies(this.movieId).subscribe(similarData => {
                        this.similar = similarData.results || [];
                        this.loading = false;
                    });
                });
            });
        });
    }
}
