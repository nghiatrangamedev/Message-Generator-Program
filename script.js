// Create a variable to store all movies
const movies = ["Iron Man", "The Incredible Hulk", "Iron Man 2", "Thor", "Captain America: The first avenger",
"The avengers", "Iron Man 3", "Thor: The dark world", "Captain America: The winter soldier",
"Guardians of the galaxy", "Avengers: Age of Ultron", "Ant-Man", " Captain America: Civil war",
"Doctor Strange", "Guardians of the galaxy vol. 2", "Spider-Man: Homecoming", "Thor: Ragnarok",
"Black Panther", "Avengers: Infinity war", "Ant-Man and the wasp", "Captain Marvel", "Avengers: Endgame",
"Spider-Man: Far from home", "Black Widow", "Shang-Chi and the legend of the ten rings", "Eternals",
"Spider-Man: No Way Home", "Doctor Strange in the Multiverse of Madness", "Thor: Love and Thunder",
"Black Panther: Wakanda Forever", "Ant-Man and the Wasp: Quantumania", "Guardians of the Galaxy Vol. 3"];

// Create a function to choose random movie
const chooseRandomMovie = movies => {
    // Calculate the total number of movies available
    const allMovies = movies.length;
    // Choose a random movie in movies
    // Create a random index from first index to last index
    // Use that index to choose a random movie
    const randomIndex = Math.floor(Math.random() * allMovies);
    const randomMovie = movies[randomIndex];
    return randomMovie;
}

// Create a variable to store random movie
const randomMovie = chooseRandomMovie(movies);

// Create a function to displays a message advising the user what movie to watch
const displayMessage = movie => {
    console.log(`You should watch ${movie}`);
}

// Displays a message advising the user what movie to watch
displayMessage(randomMovie);

