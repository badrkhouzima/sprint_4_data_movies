// Exercise 1: Get the array of all directors.
movies = require('./data');

function getAllDirectors(movies) {
  let result = [];
  result = movies.map((elem) => elem.director);
  console.log('EXERCICE 1 ->', result);

  return result;
}

//array, director
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = [];
  result = array.filter((elem) => elem.director == director);
  console.log('EXERCICE 2 ->', result);
  return result;
}
// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let score = 0;
  let oneDir = getMoviesFromDirector(array, director);
  let scores = oneDir.map((elem) => elem.score);
  let scoreReduced = scores.reduce(
    (accummulator, value) => accummulator + value
  );
  //let aveScore = scoreReduced.map(elem => elem[0]/scoreDir.length);
  score = scoreReduced / scores.length;
  score.toFixed(2);

  console.log("let's see this  3->", score);

  return score;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let films= [];
  films =  array.slice().sort();
  films = films.map(elem => elem.title);
  films = films.sort((a,b) => a.localeCompare(b));
  films = films.splice(0, 20);
  //const sort = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');
 return films;
}

// Exercise 5: Order by year, ascending
function orderByYear() {}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
