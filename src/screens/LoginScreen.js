import React from 'react';
import { SecureStore } from 'expo';
import { StyleSheet, View, TextInput, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';
import Loading from '../elements/Loading';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
    isLoading: true,
  }

  async componentDidMount() {
    const email = await SecureStore.getItemAsync('email');
    const password = await SecureStore.getItemAsync('password');
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ isLoading: false });
        this.navigateToHome();
      });
  }

  navigateToHome() {
    const resrtAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
      ],
    });
    this.props.navigation.dispatch(resrtAction);
  }

  handleSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        SecureStore.setItemAsync('email', this.state.email);
        SecureStore.setItemAsync('password', this.state.password);
        this.navigateToHome();
      })
      .catch(() => {
      });
  }

  handlePress() {
    this.props.navigation.navigate('Signup');
  }

  render() {
    return (
      <View style={styles.container}>
        <Loading isLoading={this.state.isLoading} />
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

        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor="#c70f66">
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.signup} onPress={this.handlePress.bind(this)}>
          <Text style={styles.sighnupText}>メンバー登録</Text>
        </TouchableOpacity>
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
  signup: {
    marginTop: 16,
    alignSelf: 'center',
  },
  sighnupText: {
    fontSize: 16,
  },
});

export default LoginScreen;
