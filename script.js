let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let oneOfLastSeenFilms = prompt('Один из последних просмотреных фильмов?', '');
let filmRating = prompt('На сколько оцените его?', '');

personalMovieDB.movies[oneOfLastSeenFilms] = filmRating;

console.log(personalMovieDB);
