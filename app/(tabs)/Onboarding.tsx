import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <ImageBackground source={require('../../assets/images/MixoFX 1 (1).png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME TO COVE!</Text>
        <Text style={styles.subtitle}>Connect, chat, and sell with global friends who share your interests.</Text>
        <Button title="Get Started" onPress={() => router.push('/Signup')} />
        <Button title="Log In" onPress={() => router.push('/Signin')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
});

