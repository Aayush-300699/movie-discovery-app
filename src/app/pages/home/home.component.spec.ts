import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { TmdbService } from '../../core/services/tmdb.service';
import { WatchlistService } from '../../services/watchlist.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

providers: [
    { provide: TmdbService, useValue: TmdbService },
    { provide: WatchlistService, useValue: WatchlistService },
    { provide: ActivatedRoute, useValue: { params: of({}), snapshot: {} } }
]


describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let mockTmdb: any;
    let mockWatchlist: any;

    beforeEach(async () => {
        mockTmdb = {
            getMoviesByCategory: jasmine.createSpy().and.returnValue(of({ results: [] })),
            searchMovies: jasmine.createSpy().and.returnValue(of({ results: [] }))
        };

        mockWatchlist = {
            isInWatchlist: jasmine.createSpy().and.returnValue(false),
            addToWatchlist: jasmine.createSpy(),
            removeFromWatchlist: jasmine.createSpy()
        };

        await TestBed.configureTestingModule({
            imports: [HomeComponent],
            providers: [
                { provide: TmdbService, useValue: mockTmdb },
                { provide: WatchlistService, useValue: mockWatchlist }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the HomeComponent', () => {
        expect(component).toBeTruthy();
    });

    it('should fetch movies by mood', () => {
        component.getMoviesByMood('35');
        expect(mockTmdb.getMoviesByCategory).toHaveBeenCalledWith('35');
    });

    it('should toggle watchlist correctly', () => {
        const movie = { id: 1 };
        mockWatchlist.isInWatchlist.and.returnValue(false);
        component.toggleWatchlist(movie);
        expect(mockWatchlist.addToWatchlist).toHaveBeenCalledWith(movie);
    });
});
