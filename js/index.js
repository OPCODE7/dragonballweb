function getCharacters(done) {
    const characters = fetch("https://dragon-ball-super-api.herokuapp.com/api/characters");

    characters
        .then(response => response.json())
        .then(data => {
            const $loader = document.querySelector(".loader");
            $loader.style.opacity = "100";
            $loader.style.visibility = "visible";
            if (data.length > 0) {
                setTimeout(() => {
                    done(data)
                    $loader.style.opacity = "0";
                    $loader.style.visibility = "hidden";
                }, 3000);
            }
        }).catch(err => {
            const $errorModal = document.createElement("div");
            $errorModal.classList.add("error-modal");
            $errorModal.innerHTML = `<p>${err}</p>`;
            document.body.appendChild($errorModal);
        });

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