//Peticion a uno API

const request = new XMLHttpRequest();

//metodo asincrono de petición 
request.open('GET','https://jsonplaceholder.typicode.com/users');


//propiedad
request.onload = () =>{

    //aqui se va a ejecutar cuando
    //se completo la peticion
    console.log(request.response);


};

//puede recibir datos cuando usamos el POST
request.send();
request.responseType = "json";
//esto lo ejecuta al pricipio porque
//lo demas es asincrono entonces pues se 
//ejecuta lo que se pueda por mientras
console.log("Hola a todos");


