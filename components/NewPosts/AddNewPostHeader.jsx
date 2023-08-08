import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FormikPostUpload from './FormikPostUpload'

export default function AddNewPostHeader() {
  return (
    <View style={styles.container}>
        <Header/>
        <FormikPostUpload/>
    </View>
  )
}

const Header = () => (
    <View style={styles.headerContainer}>
        <TouchableOpacity>
        <Image
        source={{uri:'https://img.icons8.com/ios-filled/50/ffffff/back.png'}}
        style={{width:25,height:25}}/>
        </TouchableOpacity>
      <Text style={styles.newPostText}>NEW POST</Text>
      <Text></Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        marginVertical:5
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    newPostText:{
        color:'white',
        fontWeight:'800',
        fontSize:22,
        marginRight:20
    }
})