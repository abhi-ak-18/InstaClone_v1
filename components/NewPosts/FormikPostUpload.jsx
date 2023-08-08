import {StyleSheet, Text, TextInput, View, Image, Button} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Divider} from 'react-native-elements';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('URL is required'),
  caption: Yup.string().max(
    2200,
    'Caption has reached max limit of 2200 chars',
  ),
});

const placeHolderImage =
  'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

export default function FormikPostUpload() {
  const [thumbnailUrl, setThumbnailUrl] = useState(placeHolderImage);

  return (
    <Formik
      initialValues={{caption: '', imageUrl: ''}}
      onSubmit={values => console.log(values)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}>
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
        <>
          <View
            style={{
              margin: 15,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Image
              source={{
                uri: thumbnailUrl ? thumbnailUrl : placeHolderImage,
              }}
              style={{width: 100, height: 100}}
            />
            <View style={{flex: 1, marginLeft: 10}}>
              <TextInput
                placeholder="Enter your caption here..."
                placeholderTextColor="gray"
                multiline={true}
                style={{color: 'white', fontSize: 18}}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            placeholder="Enter image URL"
            placeholderTextColor="gray"
            style={{color: 'white', fontSize: 14}}
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
          />
          {errors.imageUrl && (
            <Text style={{fontSize: 10, color: 'red', marginBottom:10}}>{errors.imageUrl}</Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={!isValid}/>
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({});
