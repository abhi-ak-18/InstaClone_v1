import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {Divider} from 'react-native-elements';

const BottomRow = ({icons, navigation}) => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <>
    <Divider width={1} orientation="horizontal" />
    
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.containerImg}
        onPress={() => setActiveTab('Home')}>
        <Image
          source={{
            uri:
              activeTab == 'Home'
                ? 'https://img.icons8.com/fluency-systems-filled/48/FFFFFF/home.png'
                : 'https://img.icons8.com/fluency-systems-regular/48/FFFFFF/home.png',
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerImg}
        onPress={() => setActiveTab('Search')}>
        <Image
          source={{
            uri:
              activeTab == 'Search'
                ? 'https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png'
                : 'https://img.icons8.com/ios/50/FFFFFF/search--v1.png',
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setActiveTab('Add');
          navigation.push('NewPostScreen');
        }}
        style={styles.containerImg}>
        <Image
          source={{
            uri:
              activeTab == 'Add'
                ? 'https://img.icons8.com/fluency-systems-filled/48/FFFFFF/plus-2-math.png'
                : 'https://img.icons8.com/material-outlined/24/FFFFFF/plus-2-math--v1.png',
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerImg}
        onPress={() => setActiveTab('Reel')}>
        <Image
          source={{
            uri:
              activeTab == 'Reel'
                ? 'https://img.icons8.com/ios-filled/50/FFFFFF/instagram-reel.png'
                : 'https://img.icons8.com/ios/50/FFFFFF/instagram-reel.png',
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerImg}
        onPress={() => setActiveTab('Profile')}>
        <Image
          source={{
            uri:
              activeTab == 'Profile'
                ? 'https://media.licdn.com/dms/image/C4D03AQGyCbcHqqyacg/profile-displayphoto-shrink_200_200/0/1655303376759?e=1696464000&v=beta&t=JDGTWWEGn_vxFbdq1za8h819UlZ40zLxgKk6HQ2mj7c'
                : 'https://media.licdn.com/dms/image/C4D03AQGyCbcHqqyacg/profile-displayphoto-shrink_200_200/0/1655303376759?e=1696464000&v=beta&t=JDGTWWEGn_vxFbdq1za8h819UlZ40zLxgKk6HQ2mj7c',
          }}
          style={[
            styles.icon,
            activeTab == 'Profile' ? styles.profilePic() : null,
            activeTab == 'Profile' ? styles.profilePic(activeTab) : null,
          ]}
        />
      </TouchableOpacity>
    </View>
    </>
  );
};

export default BottomRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },
  icon: {
    height: 30,
    width: 30,
    borderRadius:15
  },
  containerImg: {},
  profilePic: (activeTab = '') => ({
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: activeTab == 'Profile' ? 1 : 0,
  }),
});
