/**
 * Archivo de Datos: users.js
 * 
 * Este archivo actúa como una "base de datos" temporal en memoria.
 * Almacenamos los usuarios en un array para este ejercicio académico.
 */

// Array que almacenará los objetos de usuario { usuario, contraseña }
const users = [
    { usuario: "admin", contraseña: "123" } // Usuario por defecto para pruebas
];

// Exportamos el array para que pueda ser usado por el controlador
module.exports = users;
