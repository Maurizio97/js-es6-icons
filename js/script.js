// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

// Milestone 2
// Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.




// const dataIcon = [
// 	{
// 		name: 'cat',
// 		prefix: 'fa-',
// 		type: 'animal',
// 		family: 'fas',
// 		color: 'orange'
// 	},


// DONE=> seleziono il container per stampare gli elementi
// DONE=> creo una funzione per stampare gli elementi in pagina
    // DONE=> scorro gli oggetti dell'array
        // DONE=> utilizzo le proprietà dell'oggetto per inserire le classi dinamicamente
        // DONE=> utilizzo la key "color" per associare la classe che da il colore all'icona

const contIcons = document.querySelector(".container-icons");

// funzioni utili
//  function icon(params) {
    dataIcon.forEach((Elem) => {
        console.log(Elem);
        contIcons.innerHTML +=`
        <div class="icon">
            <i class="fas fa-dog${Elem.family} ${Elem.prefix}${Elem.name} ${Elem.color}"></i>
            <span>dog</span>
        </div>
        `
    }

    )
//  }