import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ActivityIndicator, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { fetchUserById, UserData } from '../services/api';

const ProfileScreen = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUserData = async (id: number = 1) => {
    try {
      setLoading(true);
      console.log(`Iniciando carga de datos para usuario ID: ${id}`);
      const data = await fetchUserById(id);
      console.log('Datos recibidos:', data);
      setUserData(data);
      setError(null);
    } catch (error) {
      console.error(`Error al obtener datos del usuario ${id}:`, error);
      setError('No se pudo cargar la información del usuario. Por favor, verifica la conexión o intenta más tarde.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={styles.loadingText}>Cargando datos del usuario...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
        <Pressable style={styles.retryButton} onPress={() => fetchUserData()}>
          <Text style={styles.retryButtonText}>Reintentar</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {userData && (
        <>
          <Image
            source={{ uri: userData.profile_photo_url }}
            style={styles.profileImage}
          />
          <Text style={styles.title}>Perfil del Usuario</Text>
          
          <View style={styles.userInfo}>
            <Text style={styles.label}>CI:</Text>
            <Text style={styles.value}>{userData.ci || 'No especificado'}</Text>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.value}>{userData.nombre}</Text>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.label}>Apellido Paterno:</Text>
            <Text style={styles.value}>{userData.paterno}</Text>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.label}>Apellido Materno:</Text>
            <Text style={styles.value}>{userData.materno || 'No especificado'}</Text>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{userData.email}</Text>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.label}>Celular:</Text>
            <Text style={styles.value}>{userData.celular || 'No especificado'}</Text>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.label}>Profesión:</Text>
            <Text style={styles.value}>{userData.profesion || 'No especificado'}</Text>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.label}>Especialidad:</Text>
            <Text style={styles.value}>{userData.especialidad || 'No especificado'}</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',
  },
  userInfo: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    width: '40%',
    color: '#666',
  },
  value: {
    width: '60%',
    color: '#333',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
