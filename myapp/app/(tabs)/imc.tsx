import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const IMCCalculator = () => {
  const [weight, setWeight] = useState<string>(''); // Peso em kg
  const [height, setHeight] = useState<string>(''); // Altura em metros
  const [result, setResult] = useState<string | null>(null); // Resultado do IMC

  const calculateIMC = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (!isNaN(weightNum) && !isNaN(heightNum) && heightNum > 0) {
      const imc = weightNum / (heightNum * heightNum);
      setResult(imc.toFixed(2));
    } else {
      setResult('Por favor, insira valores válidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <Button title="Calcular" onPress={calculateIMC} />

      {result && (
        <Text style={styles.result}>
          {isNaN(parseFloat(result))
            ? result
            : `Seu IMC é: ${result} (${getIMCClassification(parseFloat(result))})`}
        </Text>
      )}
    </View>
  );
};

const getIMCClassification = (imc: number) => {
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
  if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
  if (imc >= 30 && imc < 34.9) return 'Obesidade Grau I';
  if (imc >= 35 && imc < 39.9) return 'Obesidade Grau II';
  return 'Obesidade Grau III';
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#fff',
    height: '100vh',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default IMCCalculator;