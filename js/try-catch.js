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

    try {
        //AQUI ES DONDE SE EVALUA LO QUE QUEREMOS
        const usuarios = await ObtenerUsuarios();
        console.log(usuarios);

    } catch (error) {
        
        // y aqui te muestra el erro lo que paso
        console.log(error);
    }
    
};

mostrarUsuarios();