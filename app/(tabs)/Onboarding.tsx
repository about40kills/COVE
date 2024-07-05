import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ScaledSheet } from 'react-native-size-matters';

interface OnboardingScreenProps {
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  setAuthState: React.Dispatch<React.SetStateAction<string | null>>;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ setUser, setAuthState }) => {
  const router = useRouter();

  const handleSignup = () => {
    router.push('/Signup'); // Navigate to Signup screen
  };

  const handleSignin = () => {
    router.push('/Signin'); // Navigate to Signin screen
  };

  return (
    <ImageBackground source={require('../../assets/images/Onboarding1.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={{top:200}}>
        <View style={{justifyContent: "center", alignItems: 'center',bottom: 20}}>
        <Image source={require("../../assets/images/Logo.png")} />
        </View>
        <Text style={styles.title}>WELCOME TO COVE!</Text>
        <Text style={styles.subtitle}>Connect, chat, and sell with global friends who share your interests.</Text>
        <TouchableOpacity style={styles.next} onPress={handleSignup}>
          <Text>Get started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.next,{backgroundColor: "transparent",borderWidth: 1,borderColor: '#faf2f2'}]}  onPress={handleSignin} >
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

export default OnboardingScreen;

