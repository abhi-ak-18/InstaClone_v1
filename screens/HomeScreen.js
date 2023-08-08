import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Stories from '../components/Home/Stories'
import Post from '../components/Home/Post'
import { BottomTabIcons, POSTS } from '../Data/posts'
import BottomTabs from '../components/Home/BottomTabs'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Stories/>
      <ScrollView>
        {POSTS.map((post,index) => (
          <Post post={post} key={index}/>
        ))}
      </ScrollView>
      <BottomTabs icons={BottomTabIcons}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1
    }
})