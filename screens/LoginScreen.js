import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/LoginScreen/LoginForm'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: 'https://cdn1.vectorstock.com/i/1000x1000/06/40/splash-instagram-logo-black-and-white-colors-vector-35290640.jpg' , height:100 }}/>
        <Image source={{uri: 'https://logo-marque.com/wp-content/uploads/2020/04/Instagram-Logo-2016-Pr%C3%A9sent.jpg' , height:90, width:250}} style={{marginTop:5, marginLeft:30 }}/>
      </View>
      <LoginForm/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:50,
        paddingHorizontal: 22,
        color:'black'
    },
    logoContainer:{}
})