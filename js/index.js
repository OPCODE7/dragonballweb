function getCharacters(done) {
    const characters = fetch("https://dragon-ball-super-api.herokuapp.com/api/characters");

    characters
        .then(response => {
            response.json()
        })
        .then(data => done(data))
        .catch(err => alert(err));
}

getCharacters(data => {
    const $containerOfCharacters = document.querySelector(".container-characters");
    data.forEach(character => {
        const $cardCharacter = document.createRange().createContextualFragment(
        `
            <article class="card">
                <img src="${character.imageUrl}"></img>
                <h2>${character.name}</h2>
                <p>${character.role}</p>
                <p>Universo ${character.universe}</p>
            </article>
        `
        );

        $containerOfCharacters.appendChild($cardCharacter);
    });



});