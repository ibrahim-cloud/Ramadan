import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../components/Background'
import BackButton from '../../components/BackButton'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import { theme } from '../../core/theme'
// import { emailValidator } from '../../helpers/emailValidator'
// import { passwordValidator } from '../../helpers/passwordValidator'
import firebase from './../../../firebase'


export default function LoginScreen({ navigation }) {
  // const [email, setEmail] = useState({ value: '', error: '' })
  // const [password, setPassword] = useState({ value: '', error: '' })

  // const onLoginPressed = () => {
  //   const emailError = emailValidator(email.value)
  //   const passwordError = passwordValidator(password.value)
  //   if (emailError || passwordError) {
  //     setEmail({ ...email, error: emailError })
  //     setPassword({ ...password, error: passwordError })
  //     return
  //   }
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: 'Dashboard' }],
  //   })
  // }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signIn = async () => {
      try {
          await firebase.auth().signInWithEmailAndPassword(email, password);
          navigation.navigate('Dashboard');
      } catch (err) {
          setError(err.message);
      }

  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
       label="Email"
        returnKeyType="next"
        value={email}
         onChangeText={setEmail}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
         label="Password"
        returnKeyType="done"
        value={password}
       onChangeText={setPassword}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={signIn}>
        Login
      </Button>
      {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
        }
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.text,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
