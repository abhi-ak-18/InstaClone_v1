import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Header({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/insta-logo-white.png')}
        />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity /* onPress={() => navigation.push('NewPostScreen')} */>
          <Image
            source={require('../../assets/icons-heart-50.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.unreadBadge}>
                <Text style={styles.unreadBadgeTxt}>5</Text>
            </View>
          <Image
            source={require('../../assets/icons-messenger-50.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  logo: {
    height: 50,
    width: 100,
    resizeMode: 'contain',
  },
  icon:{
    height:30,
    width:30,
    marginLeft:10,
    resizeMode:'contain'
  },
  unreadBadge:{
    backgroundColor:'#D82E2F',
    position:'absolute',
    left:20,
    bottom:18,
    width:25,
    height:18,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    zIndex:100
  },
  unreadBadgeTxt:{
    color:'white',
    fontWeight:'600'
  },
});
