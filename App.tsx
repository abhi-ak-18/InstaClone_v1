import { StyleSheet, Text, View , SafeAreaView} from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage'
import AuthNavigation from './AuthNavigation'

export default function App() {
  return <AuthNavigation/>
  
}

const styles = StyleSheet.create({})
