import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const FormularioUsuario = () => {
  const [usuario, setUsuario] = useState({
    nome: '',
    idade: '',
  });

  const handleChange = (name: string, value: string) => {
    setUsuario({ ...usuario, [name]: value });

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/usuarios/', usuario);
      console.log(response.data);

    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="nome"
        keyboardType="teste"
        value={usuario.nome}
        onChangeText={(value) => handleChange('nome', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="idade"
        keyboardType="numeric"
        value={usuario.idade}
        onChangeText={(value) => handleChange('idade', value)}
      />

      <Button title="enviar" onPress={handleSubmit} />
    </View>
  );
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

export default FormularioUsuario