// Creando nuestra propia promesa
/*


    resolve => .then
    reject =>  .catch


*/

const Mifuncion = (texto) =>{
    return new Promise((resolve,reject)=>{
        if(!texto){
            reject("Necesito el texto")
        }
        resolve(texto);
    });
};

Mifuncion("Hola")
    .then((texto)=>{
        console.log(texto)
    })
    .catch((error)=>{
        console.log(error)
    });

