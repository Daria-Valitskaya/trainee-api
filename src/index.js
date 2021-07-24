import './sass/main.scss';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '980aef4f6602bffaf56ce8d4b0805479';

// class FilmotekaApiServuse {
//   constructor() {
//     this.keyword = '';
//     this.page = 1;
//   }
//   fetchTrendingMovie() {
//     return fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
//   }
//   fetchMovieByKeyword(keyword) {
//     return fetch(
//       `${BASE_URL}search/movie?api_key=${API_KEY}&query=${this.keyword}&page=${this.page}`,
//     ).then(r => r.json());
//     console.log(data).then(data => {
//       this.page += 1;
//       return data;
//     });
//   }

//   fetchMovieById() {
//     return fetch(`${BASE_URL}movie/496450?api_key=${API_KEY}`);
//   }

//   resetPage() {
//     this.page = 1;
//   }
//   get query() {
//     return this.keyword;
//   }
//   set query(newKeyword) {
//     this.keyword = newKeyword;
//   }
// }
// https://api.themoviedb.org/3/genre/movie/list?api_key=980aef4f6602bffaf56ce8d4b0805479&page=2

function fetchMovieByKeyword(keyword) {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${keyword}`)
    .then(response => response.json())
    .then(query => console.log(query))
    .catch(error => console.log(error));
}
console.log(fetchMovieByKeyword('cat'));
function fetchMovieById(ip) {
  return fetch(`${BASE_URL}movie/${ip}?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(query => console.log(query))
    .catch(error => console.log(error));
}

console.log(fetchMovieById('496450'));

function fetchTrendingMovie() {
  return fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(films => console.log(films))
    .catch(error => console.log(error));
}

console.log(fetchTrendingMovie());
