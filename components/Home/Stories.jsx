import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { USERS } from '../../Data/usersData'


export default function Stories() {
  return (
    <View style={styles.storiesContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
            <View key={index} style={styles.storyCircle}>
                <Image 
                source={{uri:story.image}}
                style={styles.story}
                />
                <Text style={styles.storyUsername} numberOfLines={1}>{
                    story.user.length > 11 ? story.user.slice(0,10)+ '...' : story.user
                }</Text>
            </View>
            ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    storyUsername:{
        color:'white',
        textTransform:'capitalize'
        
    },
    storiesContainer:{
        marginBottom:13
    },
    story:{
        width:70,
        height:70,
        borderRadius:50,
        marginLeft:6,
        borderWidth:3,
        borderColor:'#BF3312'
    },
    storyCircle:{
        alignItems:'center'
    }
})