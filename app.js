//ejercicio 1
// crear un array de frutas y agregar a lo ultimo uva

const frutas = ["naranja", "platno", "naranja"];
console.log("el array original es " + frutas);
frutas.push("uva");
console.log("el array modificado es " + frutas);
frutas.pop(); //borra el ultimo elemento
//ejercicio 2
const numeros =[1, 2, 3, 4, 5];
console.log("array original: " + numeros);

const duplicados = numeros.map((num) =>{
    return num*2;
});
console.log("array duplicado: " + duplicados);