// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

// Milestone 2
// Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.


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
selection.addEventListener("change"/*  "click" */, 
    function () {
        contIcons.innerHTML = " ";
        const filter = document.querySelector("select").value;
        // da fare solo se filter è diverso da "all"
        if(filter !== "all"){
            const filteredDataIcon = dataIcon.filter((elem) => {
                if (filter == elem.type) {
                   return elem;
                }
                
            }); 
            iconAll(contIcons, filteredDataIcon);

         // se ha cliccato "all", chiamo iconAll con tutto dataIcon
        }  else {
            iconAll(contIcons, dataIcon);
        }
    });
    

// funzioni utili
// funzione per creare tutte le icone 
function iconAll(container, myArray) {
    myArray.forEach((elem) => {
        container.innerHTML +=`
        <div class="icon">
            <i class="fas fa-dog${elem.family} ${elem.prefix}${elem.name} ${elem.color}"></i>
            <span>${elem.name}</span>
        </div>
        `;
    });
};

/*
// funzione per creare icone scelte tramite filtro
function iconFromFilter(container, elem) {
    container.innerHTML +=`
    <div class="icon">
        <i class="fas fa-dog${elem.family} ${elem.prefix}${elem.name} ${elem.color}"></i>
        <span>dog</span>
    </div>
    `;
};
*/