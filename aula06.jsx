import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

class Aula06 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.label}>Digite seu nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu nome aqui"
            placeholderTextColor="#888"
          />
        </View>
      </View>
    );
  }
}

export default Aula06;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '80%',
    backgroundColor: '#f5f5f5',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
