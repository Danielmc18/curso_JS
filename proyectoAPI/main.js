let page = 1;
const page_button = document.getElementById("page");

async function fetchData(page){

   const response =  fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
   const result = await (await response).json();

   document.getElementById("loading").style.display = "none";

   return result;
}

async function updateDOM(page){
    const result = await fetchData(page);
    const data = result.results;
    const list = document.getElementById("list");
    const templete = document.createElement("templete")
    data.forEach((personaje) => {
        templete.innerHTML += 
        `
        <div class="list-item">
        <img src="${personaje.image}">
        <h2>${personaje.name}</h2>
        <p>Genero: ${personaje.gender}</p>
        <p>Origen : ${personaje.origin.name}</p>
        <p>specie: ${personaje.species}</p>
        <p>estado: ${personaje.status}</p>
        </div>
        `;
    });

    list.innerHTML = templete.innerHTML;
}

updateDOM(1);

page_button.addEventListener("click",() =>{

    page++

    updateDOM(page);
    window.scroll(0,0);
});
