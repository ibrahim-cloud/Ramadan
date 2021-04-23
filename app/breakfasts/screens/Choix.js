import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../components/Background'
import BackButton from '../../components/BackButton'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { theme } from '../../core/theme'


export default function ChoixScreen({ navigation }) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome</Header>
      
      <Button mode="contained" >
        Login
      </Button>
      {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
        }
      <View style={styles.row}>
      <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
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
