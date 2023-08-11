import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SignedInStack, SignedOutStack } from './navigation'

export default function AuthNavigation() {
  
    const currentUser = true;

  return <>{
    currentUser ? <SignedInStack/> : <SignedOutStack/>
  }</>
}

const styles = StyleSheet.create({})
