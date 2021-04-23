import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
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
// import { nameValidator } from '../../helpers/nameValidator'
import firebase from './../../../firebase'




export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [name, setname] = useState('');

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const onSignUpPressed = () => {
  //   const nameError = nameValidator(name.value)
  //   const emailError = emailValidator(email.value)
  //   const passwordError = passwordValidator(password.value)
  //   if (emailError || passwordError || nameError) {
  //     setName({ ...name, error: nameError })
  //     setEmail({ ...email, error: emailError })
  //     setPassword({ ...password, error: passwordError })
  //     return
  //   }
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: 'Dashboard' }],
  //   })

    
  // }

  const signUp = async () => {
    try {
         await firebase.auth().createUserWithEmailAndPassword(email, password);
        navigation.navigate('LoginScreen');
    } catch (err) {
        setError(err.message);
    }

    const db = firebase.firestore();

      if (db) {
        db.collection('USers').add({
           Name:name,
           Email:email,
           Password:password
        })
         
    
    }

}

  

  return (

    <>
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      {/* <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      /> */}


      <TextInput
        label="Name"
        returnKeyType="next"
        value={name}
        onChangeText={setname}
        error={!!name.error}
        errorText={name.error}
      />
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


      <Button
      onPress={() => signUp()}
        mode="contained"
        
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
        }
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
    </>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})

