# API de Autenticación - Gestión Logístico BAVS

Esta es la API del servicio de autenticación del sistema de Gestión Logístico BAVS, desarrollada para gestionar el registro e inicio de sesión de usuarios de manera académica utilizando almacenamiento en memoria local JSON no BASE DE DATOS PROFE :)

## 🛠️ Tecnologías Utilizadas

*   **Node.js**: Entorno de ejecución para JavaScript.
*   **Express.js**: Framework para la creación de APIs REST. 
*   **JSON**: Formato para el intercambio de datos. MOMENTANEO SE PLANEA MEJORAR CON UNA BASE DE DATOS REAL (RELACIONAL O NO RELACIONAL)

## 📁 Estructura del Proyecto

*   `server.js`: Punto de entrada del servidor. (Primer archivo que se ejecuta)
*   `routes/`: Definición de los endpoints. (Rutas de la API) con esto los servicios externos, como postman, frontend, etc, se pueden comunicar con la API.
*   `controllers/`: Lógica de negocio (procesamiento de datos). (Controladores de la API) aqui se procesan los datos que vienen de las rutas y se envian al almacenamiento de datos en este caso JSON un array ajajja.
*   `data/`: Almacenamiento temporal de usuarios (Array). (Base de datos temporal) no BD REAL JAJA

## Cómo ejecutar localmente

Sigue estos pasos para poner en marcha la API en tu computador Profe si no le funciona despues de esto es su pc jaja:

1.  **Clonar el repositorio** (o descargar la carpeta):
    ```bash
    git clone https://github.com/bavs-sena/bavs_auth_api.git
    ```
2.  **Entrar a la carpeta del proyecto**:
    ```bash
    cd bavs_auth_api
    ```
3.  **Instalar las dependencias**:
    ```bash
    npm install #OJO SIN ESTO NO FUNCIONA PROFE :v
    ```
4.  **Iniciar el servidor**:
    ```bash
    npm run dev
    ```
    *Nota: El servidor se ejecutará en http://localhost:3000* (PUERTO SOLICITADO POR EL PROFE)

## 🔌 Endpoints Disponibles :v

### 1. Registro de Usuario :v no se tuvo en cuenta que los datos esten cifrados :v no es un fallo de seguridad es que no se tuvo en cuenta 
*   **Ruta**: `POST /api/register`
*   **Cuerpo (JSON)**:
    ```json
    {
      "usuario": "tu_usuario",
      "contraseña": "tu_password"
    }
    ```
*   **Respuesta Exitosa**: `{"mensaje": "Usuario registrado correctamente"}`

### 2. Inicio de Sesión
*   **Ruta**: `POST /api/login`
*   **Cuerpo (JSON)**:
    ```json
    {
      "usuario": "tu_usuario",
      "contraseña": "tu_password"
    }
    ```
*   **Respuesta Exitosa**: `{"mensaje": "Autenticación satisfactoria"}`
*   **Respuesta Fallida**: `{"mensaje": "Error en autenticación"}`

---

## 🧪 Pruebas con Postman
#Antes de probar la API con Postman, asegúrate de que el servidor esté corriendo.
Como se inicia el servidor ya lo vimos en el punto anterior.

Para probar la API con Postman:
1. Abre Postman y crea una nueva **Request**.
2. Cambia el método a **POST**.
3. Ingresa la URL (ej. `http://localhost:3000/api/register`).
4. Ve a la pestaña **Body**, selecciona **raw** y elige el formato **JSON**.
5. Escribe el objeto JSON con `usuario` y `contraseña`.
6. Presiona **Send**.

---
*Desarrollado para el proyecto formativo SENA.*
