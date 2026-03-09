/**
 * Rutas de Autenticación: authRoutes.js
 * 
 * Aquí definimos los puntos de entrada (endpoints) y los vinculamos
 * con las funciones del controlador.
 */

const express = require('express');
const router = express.Router();

// Importamos el controlador con la lógica de registro y login
const authController = require('../controllers/authController');

/**
 * Endpoint de Registro
 * Ruta Completa: POST /api/register
 */
router.post('/register', authController.register);

/**
 * Endpoint de Inicio de Sesión
 * Ruta Completa: POST /api/login
 */
router.post('/login', authController.login);

// Exportamos el router para ser usado en server.js
module.exports = router;
