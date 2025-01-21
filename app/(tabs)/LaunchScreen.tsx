import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function LaunchScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('./Onboarding');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/Logo.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
  },
});

