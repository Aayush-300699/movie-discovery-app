#  Movie Discovery App

A sleek, modern Angular application that lets users explore popular movies, view detailed information, watch trailers, and discover similar titles – all powered by The Movie Database (TMDb) API.

##  Features

-  **Search & Discover**: Browse trending, popular, and top-rated movies.
-  **Movie Details**: View complete info including poster, synopsis, genres, release date, cast, and similar movies.
-  **Top Cast**: See top-billed actors with their character names and profile images.
-  **Watch Trailers**: Play official YouTube trailers directly.
-  **Reusable Components**: Modular and reusable Angular components and pipes.
-  **Fully Responsive**: Mobile-first, responsive layout using Angular’s latest features.
-  **Safe Rendering**: Uses Angular's `SafeUrlPipe` for secure video embedding.

##  Tech Stack

- **Frontend**: Angular 17+ (standalone components)
- **API**: [TMDb API](https://developers.themoviedb.org/)
- **Routing**: Angular Router
- **State Management**: Service-based data fetching with RxJS
- **UI**: Custom SCSS + Angular directives (`NgIf`, `NgFor`)
- **Pipes**: Custom `SafeUrlPipe` for video security

##  Folder Structure

movie-discovery-app/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── services/
│   │   │   │   └── tmdb.service.ts
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── movie-detail/
│   │   │   ├── search/
│   │   │   ├── watchlist/
│   │   ├── services/
│   │   │   ├── watchlist.service.ts/
│   │   ├── shared/
│   │   │   ├── pipes/
│   │   │   │   └── safe-url.pipe.ts
│   │   ├── app.config.ts
│   │   ├── app.css
│   │   ├── app.html
│   │   ├── app.routes.ts
│   │   └── app.specs.ts
│   │   └── app.ts
│   ├── environments/
│   │   ├── environment.ts
│   ├── index.html
│   ├── main.ts
│   ├── styles.scss
├── angular.json
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore


##  Setup Instructions

1. **Clone the repository**  
   `bash`

   git clone https://github.com/your-username/movie-discovery-app.git
   cd movie-discovery-app


2. **Install dependencies** 
    
    npm install

3. **Configure TMDb API Key** 

    `Create a file: src/environments/environment.ts`

    export const environment = {
      production: false,
      tmdbApiKey: 'YOUR_TMDB_API_KEY'
    };

4. **Run the app locally**  

    ng serve

##  Deployment

    ng build --configuration=production
