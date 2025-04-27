// !!!.Este archivo es el punto de entrada de la aplicación React Native, es decir, el primer archivo que se ejecuta al iniciar la aplicación. Aquí se importa el TabNavigator, que es el componente principal que contiene la navegación de la aplicación. El componente TabNavigator se renderiza y se devuelve como el contenido de la aplicación.
import React from 'react';
import TabNavigator from './src/navigation/TabNavigator'; // Importa el TabNavigator que contiene la navegación de la aplicación

export default function App() {
  return <TabNavigator />; // Renderiza el TabNavigator, que es el contenedor principal de la aplicación
}
