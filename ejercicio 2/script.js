const libro = {
    titulo: "El Señor de los Anillos",
    autor: "J.R.R. Tolkien",
    año: 1954
    };
const libroJson = JSON.stringify(libro);
localStorage.setItem("libro", libroJson);
const libroRecuperado = localStorage.getItem("libro");
const libroObjeto = JSON.parse(libroRecuperado);
console.log(libroObjeto);