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

//ejercicio 3

// para crear el repo
// 1ro git init
// 2do git add .
// 3ro git commit -m "nombre del commir"
// 4to git remote add origin <url del repo>
// 5to git branch -m main
// 6to git push -u origin main

// una vez creado el repo
// 1ro git add .
// 2do git commit -m "mensaje"
// 3ro git push