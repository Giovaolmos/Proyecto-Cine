const resetButton = document.getElementById('resetButton');


resetButton.addEventListener('click', function() {
    const movieForm = document.getElementById('movieForm');
    movieForm.reset();
});