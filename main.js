//VARIABLES.

// console.warn(`JavaScript funcionando correctamente`)

let variableSinValor;

let booleano1 = true;
let booleano2 = false;
console.log(booleano1);
console.log(booleano2);

const PI = 3.14;
const TAU = 2 * PI;
console.log(PI)
console.log(TAU)

const miNombre = "Jairo";
const miNumeroFav = 3;
const hombre = true
console.log(miNombre.length)
console.log(typeof miNumeroFav)
console.log("Mi nombre es " + miNombre + " y mi número favorito es " + miNumeroFav);

const Frase1 = "Seré un Crack en JavaScript al terminar el Bootcamp";
console.log(Frase1.toUpperCase());

const frase2 = "Hola soy un crack";
console.log(frase2.substring(0, 5));


let numeroFavorito = miNumeroFav.toString();
console.log(typeof numeroFavorito);
// tambien se puede hacer concatenando un numero con comillas vacias console.log(3 + "")


let deporte = "skate"
let mideporteFav = `Me gusta practicar ${deporte}`
console.log("mideporteFav", mideporteFav)


console.log(PI.toFixed(2));

//ARRAYS

let arrayVacio =[];
console.log(arrayVacio);

let arrayNumero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumero2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayNumeroNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = [`Hola`, `Mundo`];
let loGuardoTodo = [`hola`, `que`, 23, 42.33, `tal`];
let arrayDeArrays = [[756, `nombre`], [225, `apellido`], [298, `direccion`]];

console.log(loGuardoTodo.length);

loGuardoTodo.push(75);
console.log(loGuardoTodo);
console.log(loGuardoTodo[1]);

loGuardoTodo.unshift(`Euralio`);
console.log(loGuardoTodo[0]);

//OBJETOS

const coche = {
    marca: `Nissan`,
    modelo: `Juke`,
    matricula: `2345jkl`,
};
console.log(coche);

const casa = {
    codPostal: 46100,
    calle: `Manuel de falla`,
    portal: 3,
    piso: 8,
};
console.log(casa);

const FullStackDeveloper = {
    lenguajes: [`javascript`, `php`, `html`, `css`],
    proyectos: [`web personal`, `ejercicio1`, `ejerciciojavascript`, `ejercicio2css`, `ejercicio html`],
};
console.log(FullStackDeveloper);

const Perro = {
    nombre: `Hela`,
    raza: `Schnauzer gigante`,
    color: `negro`,
    edad: 5,
};
console.log(Perro);

const noticia = {
    titular: `nieva en Valencia`,
    cuerpo: `nieva en la ciudad de Valencia a cero metros sobre el nivel del mar`,
};
console.log(noticia);

const persona = {
    nombre: `Jairo`,
    apellido: `Núñez`,
    edad: 29,
};
console.log(persona);
console.log(persona.nombre);

console.log(FullStackDeveloper.lenguajes[0]);

const portatil = {
    marca: `Macbook Air`,
};
console.log(portatil.marca);

const concierto = {
    grupos: [`JoeyBada$$ `, ` Flatbush Zombies `, ` Griselda`, ` Mac DeMarco`],
};
console.log(concierto.grupos);

const Led = {
    lampara1: `rojo`,
    lampara2: `verde`,
    lamapara3: `azul`,
};
let rgb = Object.values(led);
// console.log('rgb', rgb)

const O_Error = {
    código: 1
};
console.log(O_Error.código)

const grupo = {
    integrantes: [`Pepe`, `Nico`, `Maria`, `Lucia`],
};
integrantes = (grupo.integrantes);
console.log(integrantes)

const impresora = {
    tinta:{
       rojo: `rojo`,
       verde: `verde`,
       azul: `azul`, 
    },
};
objetotinta = (impresora.tinta);
console.log(objetotinta);

const movil = {
    especificaciones: {
        marca: `MSI`,
    },
};
console.log(movil.especificaciones.marca);

concierto.grupos += ", Guns N Roses" ;
// concierto.grupos.push('Guns N Roses') este es MEJOR
console.log(concierto.grupos);

concierto.fecha = new Date();
console.log(concierto);

console.log(grupo.integrantes.pop());
console.log(grupo)
console.log(grupo.integrantes.length)

