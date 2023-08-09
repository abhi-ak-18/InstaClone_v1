import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import React, {useState} from 'react';

import * as Yup from 'yup';
import {Formik} from 'formik';
import Validator from 'email-validator';

export default function SignUpForm({navigation}) {
  const SignUpFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string()
      .required()
      .min(8, 'Password must be atleast 8 characters long'),
    username: Yup.string()
      .required()
      .min(4, 'Username should have atleast 4 characters'),
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', password: '', username:''}}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={SignUpFormSchema}
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
                placeholder="Email"
                placeholderTextColor="black"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                style={[
                  styles.input,
                  {
                    borderColor:
                      values.email.length < 1 ||
                      Validator.validate(values.email)
                        ? 'gray'
                        : 'red',
                  },
                ]}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <TextInput
                placeholder="Username"
                placeholderTextColor="black"
                autoCapitalize="none"
                textContentType="username"
                style={[
                  styles.input,
                  {
                    borderColor:
                    1 > values.username.length || values.username.length >= 4 
                        ? 'gray'
                        : 'red',
                  },
                ]}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="black"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                style={[
                  styles.input,
                  {
                    borderColor:
                    1 > values.password.length || values.password.length >= 8
                        ? 'gray'
                        : 'red',
                  },
                ]}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <Pressable style={styles.signUpButton(isValid)}>
              <Text
                style={styles.buttonText}
                onPress={handleSubmit}
                disabled={!isValid}>
                Sign Up
              </Text>
            </Pressable>
            <View style={styles.signUpContainer}>
              <Text style={{color: 'black'}}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{color: 'blue'}}> Log In</Text>
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
    signUpButton: (isValid) => ({
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
