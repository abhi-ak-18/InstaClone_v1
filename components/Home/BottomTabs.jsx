import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Divider} from 'react-native-elements';


export default function BottomTabs({icons}) {
  const [activeTab, setActiveTab] = useState('Home');
  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{uri: activeTab == icon.name ? icon.active : icon.inactive}}
        style={[
          styles.icon,
          icon.name == 'Profile' ? styles.profilePic() : null,
          activeTab == 'Profile' && icon.name == activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="horizontal" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },
  wrapper: {},
  profilePic: (activeTab = '') => ({
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: activeTab == 'Profile' ? 1 : 0,
  }),
});
