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

function fetchMovieByKeyword(keyword) {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${keyword}`).then(r =>
    r.json().then(q => {
      return q.results, console.log(q.results);
    }),
  );
  // .then(console.log(results));
}
console.log(fetchMovieByKeyword('cat'));
function fetchMovieById() {
  return fetch(`${BASE_URL}movie/496450?api_key=${API_KEY}`)
    .then(r => r.json())
    .then(q => {
      return console.log(q.homepage);
    });
}

console.log(fetchMovieById('496450'));

function fetchTrendingMovie() {
  return fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`)
    .then(r => r.json())
    .then(r => {
      return r.results, console.log(r.results);
    });
}

console.log(fetchTrendingMovie());
