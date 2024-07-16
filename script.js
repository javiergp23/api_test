const api = fetch('https://api.github.com/users/javgo/repos');

api.then(response => response.json())
    .then(data => console.log(data));

