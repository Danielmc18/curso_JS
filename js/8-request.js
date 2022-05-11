const respuesta = fetch("https://jsonplaceholder.typicode.com/users");
//peticion de tipo GET si no le pones otra

console.log(respuesta);

//then recibe un callback que se va a ejecutar
//cuando tengamos una respuesta
respuesta.then((res)=>{

    const datos = res.json();
    datos.then((informacion)=>{
        console.log(informacion);
    });
});
//es para saber si ocurrio un error con la promesa
respuesta.catch(()=>{
    console.log("la promesa fallo");
});

// este metodo recibe un callback y siempre se va
//a ejecutar sin importar que haya fallado o no
respuesta.finally(()=>{
    console.log("me ejecute")
})

/// FORMA CORTA
fetch("https://jsonplaceholder.typicode.com/users").then((datos)=>{
    datos.json().then((informacion)=>{
        console.log(informacion);
    })
    .catch((motivo)=>{
        console.log(motivo);
    })
})