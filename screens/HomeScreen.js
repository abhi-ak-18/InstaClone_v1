import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Stories from '../components/Home/Stories'
import Post from '../components/Home/Post'
import { BottomTabIcons, POSTS } from '../Data/posts'
import BottomTabs from '../components/Home/BottomTabs'
import BottomRow from '../components/Home/BottomRow'

export default function HomeScreen({navigation}) {
  
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}/>
      <Stories/>
      <ScrollView>
        {POSTS.map((post,index) => (
          <Post post={post} key={index}/>
        ))}
      </ScrollView>
      {/* <BottomTabs icons={BottomTabIcons} navigation={navigation}/> */}
      <BottomRow navigation={navigation} icons={BottomTabIcons}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1
    }
})