/**
 * Controlador de Autenticación: authController.js
 * 
 * Aquí reside la lógica de negocio para el registro e inicio de sesión.
 */

// Importamos la "base de datos" en memoria
const users = require('../data/users');

/**
 * Registro de un nuevo usuario
 * Endpoint: POST /api/register
 */
const register = (req, res) => {
    try {
        const { usuario, contraseña } = req.body;

        // Validación básica de campos obligatorios
        if (!usuario || !contraseña) {
            return res.status(400).json({ 
                mensaje: "Error: El usuario y la contraseña son obligatorios." 
            });
        }

        // Verificar si el usuario ya existe
        const userExists = users.find(u => u.usuario === usuario);
        if (userExists) {
            return res.status(400).json({ 
                mensaje: "Error: El nombre de usuario ya está registrado." 
            });
        }

        // Guardar el nuevo usuario en el array
        users.push({ usuario, contraseña });

        // Responder con éxito
        res.status(201).json({ 
            mensaje: "Usuario registrado correctamente" 
        });
        
    } catch (error) {
        // Manejo básico de errores
        res.status(500).json({ 
            mensaje: "Error interno del servidor al registrar usuario" 
        });
    }
};

/**
 * Inicio de sesión (Login)
 * Endpoint: POST /api/login
 */
const login = (req, res) => {
    try {
        const { usuario, contraseña } = req.body;

        // Buscar el usuario en nuestro array
        const user = users.find(u => u.usuario === usuario && u.contraseña === contraseña);

        // Si el usuario existe y la contraseña coincide
        if (user) {
            return res.json({ 
                mensaje: "Autenticación satisfactoria" 
            });
        }

        // Si los datos son incorrectos
        res.status(401).json({ 
            mensaje: "Error en autenticación" 
        });

    } catch (error) {
        // Manejo básico de errores
        res.status(500).json({ 
            mensaje: "Error interno del servidor al iniciar sesión" 
        });
    }
};

// Exportamos las funciones del controlador
module.exports = {
    register,
    login
};
