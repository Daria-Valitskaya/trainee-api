import './sass/main.scss';
import markup from './templates/markup.hbs';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '980aef4f6602bffaf56ce8d4b0805479';

class FilmotekaApiServise {
  constructor() {
    this.filmId = '';
    this.keyword = '';
    this.page = 1;
  }
  fetchTrendingMovie() {
    return fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=${this.page}`)
      .then(response => response.json())
      .then(query => {
        this.page += 1;
        return query;
      });
  }
  fetchMovieByKeyword(keyword) {
    return fetch(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${this.keyword}&page=${this.page}`,
    )
      .then(response => response.json())
      .then(query => {
        this.page += 1;
        return query;
      });
  }
  fetchMovieById(filmId) {
    return fetch(`${BASE_URL}movie/${this.filmId}?api_key=${API_KEY}`).then(response =>
      response.json(),
    );
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.keyword;
  }
  set query(newKeyword) {
    this.keyword = newKeyword;
  }
  get filmId() {
    return this.filmId;
  }
  set filmId(currentId) {
    this.filmId = currentId;
  }
}

// https://api.themoviedb.org/3/genre/movie/list?api_key=980aef4f6602bffaf56ce8d4b0805479&page=2
// добавить page

function fetchMovieByKeyword(keyword) {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${keyword}`)
    .then(response => response.json())
    .then(query => {
      console.log(query);
      const filmCards = markup(query);
      return console.log(filmCards);
    })
    .catch(error => console.log(error));
}
console.log(fetchMovieByKeyword('cat'));
function fetchMovieById(filmId) {
  return fetch(`${BASE_URL}movie/${filmId}?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(query => console.log(query))
    .catch(error => console.log(error));
}

console.log(fetchMovieById('496450'));
// добавить page
function fetchTrendingMovie() {
  return fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(films => {
      const filmCards = markup(films);
      console.log(filmCards);
      refs.cardContainer.innerHTML = filmCards;
    });
}

console.log(fetchTrendingMovie());
const refs = { cardContainer: document.querySelector('.example') };
