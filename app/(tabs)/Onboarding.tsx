import React from 'react';
import { View, Text, StyleSheet, ImageBackground,TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ScaledSheet } from 'react-native-size-matters';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <ImageBackground source={require('../../assets/images/Onboarding1.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={{top:200}}>
        <View style={{justifyContent: "center", alignItems: 'center',bottom: 20}}>
        <Image source={require("../../assets/images/Logo.png")} />
        </View>
        <Text style={styles.title}>WELCOME TO COVE!</Text>
        <Text style={styles.subtitle}>Connect, chat, and sell with global friends who share your interests.</Text>
        <TouchableOpacity style={styles.next} onPress={() => router.push('/Signup')}>
          <Text>Get started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.next,{backgroundColor: "transparent",borderWidth: 1,borderColor: '#faf2f2'}]}  onPress={() => router.push('/Signin')} >
          <Text style={{color: "#faf2f2"}}>Log in</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = ScaledSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
   
  },
  title: {
    fontSize: '32@ms',
    color: '#fff',
    marginBottom: "20@mvs",
    alignSelf: "center",
  },
  subtitle: {
    fontSize: '18@ms',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '40@mvs',
    width: '300@s'
  },
  next: {
    top: '40@mvs',
    backgroundColor: "#faf2f2",
    width: '320@s',
    height: '50@vs',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: '20@mvs'
  }
});

