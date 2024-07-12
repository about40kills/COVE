import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { sendPasswordResetEmail,RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '@/app/firebaseConfig';

export default function ForgotPasswordScreen() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const router = useRouter();
  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, emailOrPhone);
      // Navigate to the verification screen after sending the email
      router.push('/Signin');
    } catch (error) {
      console.error('Error sending password reset email:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center',alignItems: 'center',top: 200}}>
      <View style={{width: 210,alignItems: 'center',justifyContent: 'center',marginBottom: 30}}>
      <Text style={styles.title}>Enter your email or </Text>
      <Text  style={styles.title}>phone number</Text>
      </View>
      <Text>Email or Phone number</Text>
      <TextInput
        style={styles.input}
        placeholder="Email or Phone"
        value={emailOrPhone}
        onChangeText={setEmailOrPhone}
      />
        <TouchableOpacity style={styles.verify} onPress={handleForgotPassword}>
          <Text style={{color:'#ffffff'}}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    justifyContent: 'flex-start',
    alignItems: "center",
    backgroundColor: "#FAF2F2",
  },
  title: {
    fontSize: 24,
    marginBottom: 0,
  },
  input: {
    height: 50,
    width: 320,
    borderColor: '#D4D4D4',
    backgroundColor: '#D4D4D4',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  verify: {
    top: 10,
    backgroundColor: "#800000",
    width: 320,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: "center",
  }
});
