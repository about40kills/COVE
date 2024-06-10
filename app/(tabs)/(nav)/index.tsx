import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity,ScrollView, Image,} from 'react-native';
import { useRouter } from 'expo-router';
import Spaces from "../Spaces";
import Message from '../Message';

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
      case 'Spaces':
        return <Spaces />;
      case 'Message':
        return <Message />;
      default:
        return <Spaces />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={{height: 80,width: 340,marginBottom: 15,top: 20,display: 'flex',flexDirection: 'row'}} >
        <View style={{height: 50,width: 50,backgroundColor: "#fff",borderRadius:50, marginRight: 10,alignItems: 'center',justifyContent: 'center'}}>
            <Image source={require("../../../assets/images/Icon Artwork.png")} />
        </View>
        <View >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{width: 240,display: "flex",flexDirection: 'row',}}>
        <TouchableOpacity onPress={() => setCurrentScreen('Spaces')}>
        <View style={{height: 50,width: 50,backgroundColor: "#fff",borderRadius:50,marginRight: 10}} ></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Spaces')}>
        <View style={{height: 50,width: 50,backgroundColor: "#fff",borderRadius:50,marginRight: 10}}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Spaces')}>
        <View style={{height: 50,width: 50,backgroundColor: "#fff",borderRadius:50,marginRight: 10}}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Spaces')}>
        <View style={{height: 50,width: 50,backgroundColor: "#fff",borderRadius:50,marginRight: 10}}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Spaces')}>
        <View style={{height: 50,width: 50,backgroundColor: "#fff",borderRadius:50,marginRight: 10}}></View>
        </TouchableOpacity>
        </ScrollView>
        </View>
        <TouchableOpacity style={{height: 50,width: 50,backgroundColor: "#800000",borderRadius:10,left: 10,alignItems: 'center',justifyContent: 'center'}} onPress={() => setCurrentScreen('Message')}>
            <Image source={require("../../../assets/images/forum.png")} />
        </TouchableOpacity>
      </View>
      <View style={{height: 850,backgroundColor: "#ffffff",width: 380,display: 'flex',flexDirection: 'column',justifyContent: 'space-between',borderTopRightRadius:30,borderTopLeftRadius: 30}}>
       {renderContent()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FAF2F2',
  },
  title: {
    fontSize: 24,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 50,
    width: 280,
    height: 50,
    alignItems: 'center',
    marginBottom: 10,
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#ccc',
  },
});
