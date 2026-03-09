/**
 * Servidor Principal: server.js
 * 
 * Este es el punto de entrada de nuestra API. Aquí configuramos 
 * Express y levantamos el servidor.
 */

const express = require('express');
const cors = require('cors'); // Importamos cors
const app = express();

// Definimos el puerto (3000 según requerimientos)
const PORT = 3000;

/**
 * Middlewares
 */

// Habilitar CORS para permitir peticiones desde el frontend (puerto 5173 por defecto en Vite)
app.use(cors());

// Permite que la API entienda y procese datos en formato JSON
app.use(express.json());

// Importamos las rutas de autenticación
const authRoutes = require('./routes/authRoutes');

/**
 * Configuración de Rutas
 */

// Todos los endpoints de autenticación empezarán con /api
app.use('/api', authRoutes);

// Ruta base opcional para verificar que el servidor funciona
app.get('/', (req, res) => {
    res.send('API de Control Logístico BAVS funcionando correctamente 🚀');
});

/**
 * Inicio del Servidor
 */
app.listen(PORT, () => {
    console.log(`==========================================`);
    console.log(` Servidor ejecutándose en el puerto ${PORT}`);
    console.log(` Endpoint Registro: POST http://localhost:${PORT}/api/register`);
    console.log(` Endpoint Login:    POST http://localhost:${PORT}/api/login`);
    console.log(`==========================================`);
});
