import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import AddNewPostHeader from '../components/NewPosts/AddNewPostHeader'

export default function NewPostScreen({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor:'black', flex:1}}>
      <AddNewPostHeader navigation={navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})