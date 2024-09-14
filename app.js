// Función POST
document.getElementById('postMovieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const movie = {
        imdbID: document.getElementById('postImdbID').value,
        Title: document.getElementById('Title').value,
        Year: document.getElementById('Year').value,
        Type: document.getElementById('Type').value,
        Poster: document.getElementById('Poster').value,
        Description: document.getElementById('Description').value,
        Ubication: document.getElementById('Ubication').value,
        Estado: 1
    };

    fetch('https://movie.azurewebsites.net/api/cartelera', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultContent').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => console.error('Error:', error));
});

// Función PUT
document.getElementById('putMovieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const imdbID = document.getElementById('putImdbID').value;
    const updatedMovie = {
        imdbID: imdbID,
        Title: document.getElementById('putTitle').value,
        Year: "2022", 
        Type: "Action",
        Poster: "https://example.com/poster.jpg",
        Description: "Updated description",
        Ubication: 'New location',
        Estado: true
    };

    fetch(`https://movie.azurewebsites.net/api/cartelera?imdbID=${imdbID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedMovie),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultContent').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => console.error('Error:', error));
});

// Función DELETE
document.getElementById('deleteMovieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const imdbID = document.getElementById('deleteImdbID').value;

    fetch(`https://movie.azurewebsites.net/api/cartelera?imdbID=${imdbID}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultContent').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => console.error('Error:', error));
});
