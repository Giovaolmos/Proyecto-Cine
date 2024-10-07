const infoHover = require("./cardsEventos");
const moviesContainer = document.getElementById("movies-container");

const renderCards = (data) => {
    data.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.classList.add("card-title");
        title.innerHTML = movie.title;

        const poster = document.createElement("img");
        poster.classList.add("card-image");
        poster.src = movie.poster;

        const info = document.createElement("div");
        info.classList.add("card-info");

        const year = document.createElement("p");
        year.classList.add("card-text");
        year.innerHTML = `<strong>Year:</strong> ${movie.year}`;

        const director = document.createElement("p");
        director.classList.add("card-text");
        director.innerHTML = `<strong>Director:</strong> ${movie.director}`;

        const genre = document.createElement("p");
        genre.classList.add("card-text");
        genre.innerHTML = `<strong>Genre:</strong> ${movie.genre}`;

        const duration = document.createElement("p");
        duration.classList.add("card-text");
        duration.innerHTML = `<strong>Duration:</strong> ${movie.duration}`;

        const rate = document.createElement("p");
        rate.classList.add("card-text");
        rate.innerHTML = `<strong>rate:</strong> ${movie.rate}`;
        infoHover(card, info);

        

        card.appendChild(title);
        card.appendChild(poster);
        card.appendChild(info);
        info.appendChild(year);
        info.appendChild(director);
        info.appendChild(genre);
        info.appendChild(duration);
        info.appendChild(rate);

        moviesContainer.appendChild(card);
    });
};

module.exports = renderCards;
