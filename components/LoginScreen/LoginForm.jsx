import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Pressable,
  Alert
} from 'react-native';
//import {db} from '../../firebase';

//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, {useState} from 'react';
//import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//import firebase from '../../firebase';


import * as Yup from 'yup';
import {Formik} from 'formik';
import Validator from 'email-validator';

export default function LoginForm({navigation}) {

  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string()
      .required()
      .min(8, 'Password must be atleast 8 characters long'),
  });

  //const auth = getAuth();

  const onLogin = async (email,password) => {
    try {
      //await firebase.signInWithEmailAndPassword(auth,email, password)
      console.log('Firebase login success !', email , password)
    } catch (error) {
      Alert.alert(error.message)
    }
  }


  /* signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  }); */

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          //onLogin(values.email, values.password)
          console.log(values)

        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View>
              <TextInput
                placeholder="Username , email or Phone number"
                placeholderTextColor="black"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                style={[styles.input , {borderColor:values.email.length < 1 || Validator.validate(values.email) ? 'gray' : 'red'}]}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="black"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                style={[styles.input , {borderColor:1 > values.password.length || values.password.length >= 8 ? 'gray' : 'red'}]}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <View style={{alignItems: 'flex-end', marginBottom: 20}}>
              <Text style={{color: 'blue'}}>Forgot password?</Text>
            </View>
            <Pressable style={styles.loginButton(isValid)}>
              <Text style={styles.buttonText} onPress={handleSubmit} disabled={!isValid}>
                Log In
              </Text>
            </Pressable>
            <View style={styles.signUpContainer}>
              <Text style={{color: 'black'}}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.push('SignUpScreen')}>
                <Text style={{color: 'blue'}}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
    borderRadius:8
  },
  loginButton: (isValid) => ({
    backgroundColor: isValid ? 'blue': '#ADD8E6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
  },
  signUpContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 60,
    justifyContent: 'center',
  },
});
