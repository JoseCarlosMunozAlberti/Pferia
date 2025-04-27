import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, Pressable, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // Importa los iconos de Ionicons
import api from '../services/api';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface MailData {
  email: string;
  
}

/*El react.FC es una forma de definir un componente funcional en React que tiene tipos de props. 
En este caso, no se están pasando props, pero es una buena práctica usarlo para la escalabilidad futura.*/
//El componente HomeScreen es un componente funcional que representa la pantalla de inicio de la aplicación.
const HomeScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  
  const menuItems = [
    { id: 1, title: 'Eventos', icon: 'calendar-outline' },
    { id: 2, title: 'Libros', icon: 'book-outline' },
    { id: 3, title: 'Colaboradores', icon: 'people-outline' },
    { id: 4, title: 'Perfil', icon: 'person-outline' },
    { id: 5, title: 'Pronto..', icon: 'cloud-offline' }, 
  ];

  const handlePress = (title: string) => {
    console.log(`Navegando a ${title}`);
    // Aquí irá la lógica de navegación
    
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Búsqueda</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.gridContainer}>
          {menuItems.map((item) => (
            <Pressable
              key={item.id}
              style={styles.button}
              onPress={() => handlePress(item.title)}
            >
              <View style={styles.buttonContent}>
                <Ionicons name={item.icon as any} size={32} color="#4A90E2" />
                <Text style={styles.buttonText}>{item.title}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
  },
  button: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  buttonText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  buttonPressed: {
    backgroundColor: '#45a049',
    transform: [{ scale: 0.98 }],
  },
  text: { 
    fontSize: 20 
  },
  content:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 18,
    color: '#4CAF50',
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  error: {
    color: 'red',
  },
});
