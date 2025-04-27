import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import * as Updates from 'expo-updates';
import Constants from 'expo-constants';

export const UpdateChecker = () => {
  const [isChecking, setIsChecking] = useState(false);

  const checkForUpdates = async () => {
    // Solo verificar actualizaciones en builds de producción
    if (__DEV__) {
      return;
    }

    try {
      setIsChecking(true);
      const { isAvailable } = await Updates.checkForUpdateAsync();
      
      if (isAvailable) {
        Alert.alert(
          'Actualización Disponible',
          'Hay una nueva versión de la aplicación disponible. ¿Deseas actualizar ahora?',
          [
            {
              text: 'Actualizar',
              onPress: async () => {
                await Updates.fetchUpdateAsync();
                await Updates.reloadAsync();
              },
            },
            {
              text: 'Más tarde',
              style: 'cancel',
            },
          ],
          { cancelable: false }
        );
      }
    } catch (error) {
      console.error('Error al verificar actualizaciones:', error);
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    checkForUpdates();
  }, []);

  return null;
}; 