import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  // eslint-disable-next-line
  handleSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log('success!', user);
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
            ログイン
        </Text>

        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(email) => { this.setState({ email }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(password) => { this.setState({ password }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />

        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor="transparent">
          <Text style={styles.buttonTitle}>ログインする</Text>
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

export default LoginScreen;
