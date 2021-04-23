import React, {useState} from 'react'
import {View} from 'react-native'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import BackButton from '../../components/BackButton'
import { theme } from '../../core/theme'
// import firebase from './../../../firebase'

// const db = firebase.firestore();


export default function signup() {
  
//   const [place, setPlace] = useState("")
//   const [description, setDescription] = useState("")
//   const [latitude, setLatitude] = useState("")
//   const [longtitude, setLongtitude] = useState("")


//   const addBreackFest = () => {
//     if (db) {
//       db.collection('breackFest').add({
//           place: Number(place),
//           description: description,
//           latitude: latitude,
//           longtitude: longtitude,
//       })
       
//   }
//   }



  return (
    <Background>
    <BackButton goBack={navigation.goBack} />
    <Logo />
    <Header>Create Account</Header>
    <TextInput
      label="Name"
      returnKeyType="next"
      value={name.value}
      onChangeText={(text) => setName({ value: text, error: '' })}
      error={!!name.error}
      errorText={name.error}
    />
    <TextInput
      label="Email"
      returnKeyType="next"
      value={email.value}
      onChangeText={(text) => setEmail({ value: text, error: '' })}
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
      value={password.value}
      onChangeText={(text) => setPassword({ value: text, error: '' })}
      error={!!password.error}
      errorText={password.error}
      secureTextEntry
    />
    <Button
      mode="contained"
      onPress={onSignUpPressed}
      style={{ marginTop: 24 }}
    >
      Sign Up
    </Button>
    <View style={styles.row}>
      <Text>Already have an account? </Text>
      <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
        <Text style={styles.link}>Login</Text>
      </TouchableOpacity>
    </View>
  </Background>
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
});
