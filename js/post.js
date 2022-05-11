/* 
normalmente se compone de 3 parámetros

Indicar que la petición será de tipo POST

Incluir el cuerpo de la petición ( los datos a mandar )

Añadir una cabecera a la petición para indicarle que tipo de datos estamos mandando

//Nota : Debemos convertir los datos a un string con formato JSON antes de enviarlos

// Nota2: Dicha API tiene que estar configurada para aceptar peticiones POST por dicha ruta, si no, no funcionará

// Nota3: Una vez enviados los datos es la API la que decide que hacer con ellos


*/

const post = {
    name: "mi post",
    description: "mi descripcion",
    long: true,
  };
   
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },

  })
  .then(() => {
      console.log("datos enviados");
    })
  .catch((err) => {
      console.log(err);
});
 MiPromesa
.then(() => {
    // Este código se ejecutara si la promesa ejecuta su función resolve
})
.catch((error) => {
    // Este código se ejecutara si la promesa ejecuta su función reject
    // El parámetro de error que recibimos es el que la promesa pasó a la función reject
})
.finally(() => {
    // Este código se ejecutará sin importar si la promesa fue resuelta o rechazada
})