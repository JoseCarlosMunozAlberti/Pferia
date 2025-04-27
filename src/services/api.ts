import axios from 'axios';

// Definir la interfaz UserData con todos los campos de la API
export interface UserData {
  id: number;
  name: string;
  ci: string | null;
  nombre: string;
  paterno: string;
  materno: string | null;
  sexo: string | null;
  nacimiento: string | null;
  pais: string | null;
  estado: string | null;
  residencia: string | null;
  estado_residencia: string | null;
  ciudad_residencia: string | null;
  direccion: string | null;
  profesion: string | null;
  especialidad: string | null;
  celular: string | null;
  telefono: string | null;
  rol_activo: string;
  email: string;
  email_verified_at: string | null;
  current_team_id: number | null;
  profile_photo_path: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  profile_photo_url: string;
}

// Crear una instancia de axios con configuración base
const api = axios.create({
  baseURL: 'https://feriasc.programatupotencial.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',  // Indica que queremos recibir datos en formato JSON
    'X-Requested-With': 'XMLHttpRequest'  // Indica que es una petición AJAX
  }
});

// Función para obtener usuario por ID
export const fetchUserById = async (id: number): Promise<UserData> => {
  try {
    console.log(`Intentando obtener usuario con ID: ${id}`);
    
    // Primero intentamos obtener todos los usuarios
    try {
      console.log('Obteniendo todos los usuarios...');
      const response = await api.get('/usuarios');
      const user = response.data.find((u: UserData) => u.id === id);
      
      if (user) {
        console.log('Usuario encontrado en la lista de usuarios');
        return user;
      }
      
      throw new Error('Usuario no encontrado en la lista de usuarios');
    } catch (error) {
      console.error('Error al obtener todos los usuarios:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    if (axios.isAxiosError(error)) {
      console.error('Detalles del error:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        url: error.config?.url
      });
    }
   else if (error instanceof Error) {
    // Otro tipo de error, como errores en lógica o código
    console.error('Otro tipo de error:', {
      nombre: error.name,
      mensaje: error.message,
      stack: error.stack // muestra en qué parte del código ocurrió
    });
  } else {
    // Algo muuuy raro que ni siquiera es un Error común
    console.error('Error desconocido:', error);
  }
    throw error;
  }
};

// Función para obtener todos los usuarios
export const fetchAllUsers = async (): Promise<UserData[]> => {
  try {
    const response = await api.get('/usuarios');
    return response.data;
  } catch (error) {
    console.error('Error al obtener todos los usuarios:', error);
    throw error;
  }
};

// Interceptor para manejar errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en la petición:', error);
    return Promise.reject(error);
  }
);

export default api; 