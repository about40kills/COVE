import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity,ScrollView, Image,} from 'react-native';
import { useRouter } from 'expo-router';
import { ScaledSheet } from 'react-native-size-matters';
import Spaces from "../Spaces";
import Message from '../Message';
import HomeSpaces from '../HomeSpaces';
import HomeMessages from '../HomeMessages';

export default function SpacesScreen() {
    const [mode, setMode] = useState("Server");
  const router = useRouter();

  const handleSpacess = () => {
    setMode("Spacess");
  }
  const handleServer = () => {
    setMode("Server")
  }

  const [currentScreen, setCurrentScreen] = useState('Spaces');

  const renderContent = () => {
    switch (currentScreen) {
      case 'HomeSpaces':
        return <HomeSpaces />;
      case 'Message':
        return <HomeMessages />;
      default:
        return <Spaces />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer} >
        <View style={styles.imagecontainer}>
            <Image source={require("../../../assets/images/Icon Artwork.png")} />
        </View>
        <View >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.channelScroll}>
        <TouchableOpacity onPress={() => setCurrentScreen('HomeSpaces')} >
        <View style={styles.channelscontainer} ></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Spaces')}>
        <View style={styles.channelscontainer}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Spaces')}>
        <View style={styles.channelscontainer}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Spaces')}>
        <View style={styles.channelscontainer}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Spaces')}>
        <View style={styles.channelscontainer}></View>
        </TouchableOpacity>
        </ScrollView>
        </View>
        <TouchableOpacity style={styles.screenName} onPress={() => setCurrentScreen('Message')}>
            <Image source={require("../../../assets/images/forum.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.rendercontent}>
       {renderContent()}
      </View>
    </View>
  );
}




const styles = ScaledSheet.create({
  container: {
    flex: 1,
    top: '30@ms',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FAF2F2',
  },
  subcontainer: {
    height: '80@ms',
    width: '340@ms',
    marginBottom: '15@ms',
    marginRight: '17@ms',
    top: '20@ms',
    display: 'flex',
    flexDirection: 'row',
  },
  imagecontainer: {
    height: '50@ms',
    width: '50@ms',
    backgroundColor: "#fff",
    borderRadius: '50@ms',
    marginRight: '10@ms',
    alignItems: 'center',
    justifyContent: 'center',
  },
  channelScroll: {
    width: '240@ms',
    display: "flex",
    flexDirection: 'row',
  },
  channelscontainer: {
    height: '50@ms',
    width: '50@ms',
    backgroundColor: "#fff",
    borderRadius: '50@ms',
    marginRight: '10@ms',
  },
  screenName: {
    height: '50@ms',
    width: '50@ms',
    backgroundColor: "#800000",
    borderRadius: '10@ms',
    left: '10@ms',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rendercontent: {
    height: '100%',
    backgroundColor: "#ffffff",
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopRightRadius: '30@ms',
    borderTopLeftRadius: '30@ms',
  },
  title: {
    fontSize: '24@ms',
    marginTop: '10@ms',
  },
  button: {
    backgroundColor: '#8B0000',
    padding: '10@ms',
    borderRadius: '50@ms',
    width: '280@ms',
    height: '50@ms',
    alignItems: 'center',
    marginBottom: '10@ms',
  },
  buttonText: {
    color: '#fff',
    fontSize: '16@ms',
  },
  secondaryButton: {
    backgroundColor: '#ccc',
  },
});




