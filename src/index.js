import './sass/main.scss';
import markup from './templates/markup.hbs';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '980aef4f6602bffaf56ce8d4b0805479';

class FilmotekaApiServise {
  constructor() {
    this.page = 1;
    this.keyword = '';
    this.filmId = '';
  }
  fetchTrendingMovie() {
    return fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`).then(response =>
      response.json(),
    );
  }
  fetchMovieByKeyword(keyword) {
    return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${keyword}&page=${this.page}`)
      .then(response => response.json())
      .then(value => {
        this.page += 1;
        return value;
      });
  }
  fetchMovieById(filmId) {
    return fetch(`${BASE_URL}movie/${filmId}?api_key=${API_KEY}`).then(response => response.json());
  }

  resetPage() {
    this.page = 1;
  }

  get value() {
    return this.keyword;
  }
  set value(newKeyword) {
    this.keyword = newKeyword;
  }
  // get query() {
  //   return this.filmId;
  // }
  // set query(newId) {
  //   this.filmId = newId;
  // }
  //
}
// https://api.themoviedb.org/3/genre/movie/list?api_key=980aef4f6602bffaf56ce8d4b0805479&page=2
// добавить page

// function fetchMovieByKeyword(keyword) {
//   return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${keyword}`).then(response =>
//     response.json(),
//   );
//   // .then(films => {
//   //   const filmCards = markup(films);
//   //   // console.log(filmCards);
//   //   refs.cardContainer.innerHTML = filmCards;
// }

// function fetchMovieById(filmId) {
//   return fetch(`${BASE_URL}movie/${filmId}?api_key=${API_KEY}`).then(response => response.json());
//   // .then(films => {
//   //   const filmCards = markup(films);
//   //   console.log(filmCards);
//   //   refs.cardContainer.innerHTML = filmCards;
//   // });
// }
// fetchMovieByKeyword('dog').then(films => {
//   const filmCards = markup(films);
//   // console.log(filmCards);
//   refs.cardContainer.innerHTML = filmCards;
// });
// console.log(fetchMovieById('496450'));
// добавить page

// function fetchTrendingMovie() {
//   return fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`).then(response =>
//     response.json(),
//   );
// }

// fetchTrendingMovie().then(films => {
//   const filmCards = markup(films);
//   refs.cardContainer.innerHTML = filmCards;
// });
// fetchMovieById('496450').then(films => console.log(films));
const refs = { cardContainer: document.querySelector('.example') };

const API = new FilmotekaApiServise();
// по ключевому слову-работает
API.fetchMovieByKeyword('dog').then(films => {
  console.log(films);
  const filmCards = markup(films);
  refs.cardContainer.innerHTML = filmCards;
});
// популярные фильмы работают
// API.fetchTrendingMovie().then(films => {
//   const filmCards = markup(films);
//   refs.cardContainer.innerHTML = filmCards;
// });
// по айдишнику тоже работает
API.fetchMovieById('496450').then(films => console.log(films));
