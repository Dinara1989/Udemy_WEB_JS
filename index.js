const numberOfFilms = +prompt('Скільки фільмів ви вже подивилися?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const a = prompt('Один із останніх фільмів, що ви подивилися?', ''),
    b = prompt('Скільки балів йому поставите?', ''),
    c = prompt('Один із останніх фільмів, що ви подивилися?', ''),
    d = prompt('Скільки балів йому поставите?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
