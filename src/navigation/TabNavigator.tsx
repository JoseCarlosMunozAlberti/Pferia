/*Este archivo es el que une todos los componentes y pantallas de la aplicación.
 Aquí se define la navegación entre las diferentes pantallas utilizando un Tab Navigator,
que permite cambiar entre diferentes vistas de la aplicación mediante pestañas en la parte inferior de la pantalla.
 También se definen los iconos que se mostrarán en cada pestaña y se configuran algunas opciones de estilo para la barra de pestañas.*/
 
import React from 'react';                                                   // Importa React para usar JSX
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';    // Importa el creador de la barra de pestañas
import { NavigationContainer } from '@react-navigation/native';              // Importa el contenedor de navegación
import { Ionicons } from '@expo/vector-icons';                               // Importa los iconos de Ionicons
import HomeScreen from '../screens/HomeScreen';                              // Importa la pantalla de inicio
import ProfileScreen from '../screens/ProfileScreen';   
import StatisticScreen from '../screens/StatisticScreen';                    // Importa la pantalla de perfil
import { UpdateChecker } from '../components/UpdateChecker';

const Tab = createBottomTabNavigator();     // Es como crear nuestro control remoto

export default function TabNavigator() {
 //Contenedor obligatorio para la navegación (NavigationContainer)
 // Este contenedor es necesario para que la navegación funcione correctamente en la aplicación.
  return (
    <NavigationContainer>   
      <UpdateChecker />
      <Tab.Navigator    
      // ⬆️ Es como el contenedor principal de la app                                                    
        id={undefined}                                                           // Definir ID para evitar error (obligatorio en algunos casos)
        screenOptions={({ route }) => ({                                         // Opciones comunes para todas las pestañas
          headerShown: false,                                                    // Ocultamos la cabecera (header)
          tabBarIcon: ({ color, size }) => {                                     // Definimos el ícono de cada pestaña
            let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';       // Inicializamos el ícono por defecto (usamos let para poder cambiar el valor ya que const no se puede cambiar)
            // Cambiamos el ícono según la ruta (pantalla) actual
            if (route.name === 'Inicio') iconName = 'home-outline';              // Si la ruta es "Inicio", usamos ese ícono
            if (route.name === 'Perfil') iconName = 'person-outline';            // Si la ruta es "Perfil", usamos otro ícono
            if (route.name === 'Estadisticas') iconName = 'stats-chart-outline'; // Si la ruta es "Estadisticas", usamos otro ícono válido
            return <Ionicons name={iconName} size={size} color={color} />;       // Renderiza el ícono
          },
          tabBarActiveTintColor: 'tomato',                                       // Color del ícono activo
          tabBarActiveBackgroundColor:'#E0FFFF',                                 // Color de fondo del ícono activo
          tabBarInactiveTintColor: 'gray',                                       // Color del ícono inactivo
        })}
      >
                                                                         
        <Tab.Screen name="Inicio" component={HomeScreen} /> 
        <Tab.Screen name="Perfil" component={ProfileScreen} />   
        <Tab.Screen name="Estadisticas" component={StatisticScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
