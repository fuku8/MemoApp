import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableHighlight } from 'react-native';

class SignupScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
            メンバー登録
        </Text>

        <TextInput style={styles.input} value="Email" />
        <TextInput style={styles.input} value="Password" />

        <TouchableHighlight style={styles.button} underlayColor="#c70f66" onPress={() => {}}>
          <Text style={styles.buttonTitle}>送信</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    height: 48,
    padding: 8,
    marginBottom: 16,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#e31676',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SignupScreen;
