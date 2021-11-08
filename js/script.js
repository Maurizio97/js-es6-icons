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

// seleziono il contenitore delle icone
const contIcons = document.querySelector(".container-icons");
// seleziono i filtri
const selection = document.querySelector("select");
const btn = document.querySelector("button");
// genero tutte le icone
iconAll(contIcons, dataIcon);
// creo un ascoltatore e permetto di scegliere le icone tramite un filtro
selection.addEventListener("Inputs"/*  "click" */,
        
    function () {
        contIcons.innerHTML = " ";
        dataIcon.forEach((elem) => {
            const filter = document.querySelector("select").value;
            if (filter == elem.type) {
                console.log(`filtro ${filter}`, elem);
                iconFromFilter(contIcons, elem);

            } else if (filter == "all") {
                console.log(`filtro ${filter}`, elem);
                iconFromFilter(contIcons, elem);
            }
        }
        );
    }
                
        );

// funzioni utili
// funzione per creare tutte le icone 
function iconAll(container, myArray) {
    myArray.forEach((elem) => {
        /* console.log(Elem); */

        container.innerHTML +=`
        <div class="icon">
            <i class="fas fa-dog${elem.family} ${elem.prefix}${elem.name} ${elem.color}"></i>
            <span>${elem.name}</span>
        </div>
        `;
    }

    );
};

// funzione per creare icone scelte tramite filtro
function iconFromFilter(container, elem) {
    container.innerHTML +=`
    <div class="icon">
        <i class="fas fa-dog${elem.family} ${elem.prefix}${elem.name} ${elem.color}"></i>
        <span>dog</span>
    </div>
    `;
};