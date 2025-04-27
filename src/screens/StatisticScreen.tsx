import React from 'react'; // Importa React para usar JSX
import { View, Text, StyleSheet } from 'react-native'; // Importa los componentes necesarios de React Native
import { Ionicons } from '@expo/vector-icons'; // Importa los iconos de Ionicons

const StatisticScreen: React.FC = () => {
return (
      <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}><Ionicons name="stats-chart-outline" size={24} color="white" /> Estadisticas</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Pantalla de estadísticas 📊</Text>
          </View>
        </View>
    );
};

export default StatisticScreen; // Exporta el componente para que pueda ser utilizado en otras partes de la aplicación

const styles = StyleSheet.create ({
   //El body de esta ventana es el container.
   container: { 
    alignItems: 'center', 
    backgroundColor: '#E6E6FA',
    flex: 1, 
    padding: 20,
    justifyContent: 'center', 
    width: '100%',
  },
  text: { 
    fontSize: 20 
  },
  //header para la cabecera de la ventana.
  header:{
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    width: '100%',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
},
  content:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //cabecera de la ventana termina aquí.
})