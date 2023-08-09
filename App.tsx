import { StyleSheet, Text, View , SafeAreaView} from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import NewPostScreen from './screens/NewPostScreen'
import SignedInStack from './navigation'
import 'react-native-gesture-handler';

export default function App() {
  return <SignedInStack/>
  
}

const styles = StyleSheet.create({})