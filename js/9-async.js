

async function ObtenerUsuarios(){


    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    const datos = await respuesta.json;

    return datos;

};

// DIFERENTES MANERAS DE USAR EL ASYNC AWAIT
// BUENAS PRACTICAS

ObtenerUsuarios().then((datos)=>{
    console.log(datos);
});

const mostrarUsuarios = async () => {
    const usuarios = await ObtenerUsuarios();
    console.log(usuarios);
};

mostrarUsuarios();