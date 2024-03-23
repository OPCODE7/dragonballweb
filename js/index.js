async function getCharacters(done) {
    try {
        const data = await fetch("https://dragonball-api.com/api/characters"),
        json= await data.json();
        const $loader = document.querySelector(".loader");
        $loader.style.opacity = "100";
        $loader.style.visibility = "visible";
        if (json.items.length > 0) {
            setTimeout(() => {
                done(json.items)
                $loader.style.opacity = "0";
                $loader.style.visibility = "hidden";
            }, 3000);
        }
        
    } catch (err) {
        const $errorModal = document.createElement("div");
            $errorModal.classList.add("error-modal");
            $errorModal.innerHTML = `<p>${err}</p>`;
            document.body.appendChild($errorModal);
    }
   

}

getCharacters(data => {
    const $containerOfCharacters = document.querySelector(".container-characters");

    data.forEach(character => {
        const $cardCharacter = document.createRange().createContextualFragment(
            `
            <article class="card">
                <img src="${character.image}"></img>
                <h2>${character.name}</h2>
                <p>${character.race}</p>
                <p>KI: ${character.ki}</p>
            </article>
        `
        );

        $containerOfCharacters.appendChild($cardCharacter);
    });



});