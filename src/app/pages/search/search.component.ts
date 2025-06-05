import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TmdbService } from '../../core/services/tmdb.service';
import { NgIf, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
    standalone: true,
    selector: 'app-search',
    imports: [CommonModule, FormsModule, NgIf, NgFor, RouterModule, RouterTestingModule],
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    query = '';
    results: any[] = [];
    loading = false;
    error = '';

    constructor(private tmdb: TmdbService) { }

    search() {
        if (!this.query.trim()) return;

        this.loading = true;
        this.error = '';
        this.results = [];

        this.tmdb.searchMovies(this.query).subscribe({
            next: (res: any) => {
                this.results = res.results || [];
                this.loading = false;
            },
            error: () => {
                this.error = 'Something went wrong. Try again!';
                this.loading = false;
            }
        });
    }
}
