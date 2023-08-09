import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import SignUpForm from '../components/SignUpScreen/SignUpForm'

export default function SignUpScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: 'https://cdn1.vectorstock.com/i/1000x1000/06/40/splash-instagram-logo-black-and-white-colors-vector-35290640.jpg' , height:100  }}/>
      </View>
      <SignUpForm navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:10,
        paddingHorizontal: 22,
    },
    logoContainer:{
      marginTop:30,
      marginBottom:50
    }
})