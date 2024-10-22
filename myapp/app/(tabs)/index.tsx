import { Image, StyleSheet, Platform, Text} from 'react-native';
import { useEffect, useState} from 'react';
import axios from 'axios';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FlatList } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const [itens, setItens] = useState([]);
  useEffect(() => {
    const fechData = async () => {
      const response = await axios.get('http://127.0.0.1:8000/itens');
      setItens(response.data);
  };
  fechData();
}, []);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/imagemfundo.png')}
          style={styles.reactLogo}
        />
      }>
        <FlatList 
        data={itens}
        renderItem={({ item }) => <Text>{item.nome}</Text>}
      />
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Tente isso</ThemedText>
        <ThemedText>
          edite <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> para ver as alterações.
          Aperte{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          para abrir as ferramentas de desenvolvedor.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
        Toque na guia Explorar para saber mais sobre o que está incluído neste aplicativo inicial.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Comece do zero</ThemedText>
        <ThemedText>
          Quando você estiver pronto, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> diretorio. Isso moverá a corrente{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
