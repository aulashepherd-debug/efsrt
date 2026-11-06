// frontend-app/src/services/api.js
const API_URL = 'http://localhost:5000/api'; // Cuando subas a producción, cambia por tu dominio

export const loginAPI = async (username, password, role) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, role }),
    });
    
    return await response.json();
  } catch (error) {
    console.error("Error en la petición API:", error);
    return { success: false, message: 'No se pudo conectar con el servidor.' };
  }
};
