import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ScaledSheet } from 'react-native-size-matters';

export default function SignInScreen() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
    <View style={{top: 100}}>
    <View style={{alignItems: 'center',bottom: 30}}>
        <Image source={require("../../assets/images/LogoRed.png")} />
      </View>
      <View>
      <View style={{display: "flex",flexDirection: 'column',alignItems: 'center',top: 20,marginBottom: 60,}}>
      <Text style={styles.title}>Welcome back!</Text>
      <Text style={{}} > We're so excited to see you again!</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email or Phone"
        value={emailOrPhone}
        onChangeText={setEmailOrPhone}
      />
      <TextInput
        style={[styles.input,{marginBottom: 2}]}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.forgotPassword} onPress={() => router.push('/ForgotPassword')}>
        Forgot password?
      </Text>
      </View>
      <TouchableOpacity style={styles.signin} onPress={() => {router.push("./(nav)")}}>
          <Text style={{color: "#ffffff"}}>Sign in</Text>
      </TouchableOpacity>
      
    </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    top: 30,
    justifyContent: 'flex-start',
    alignItems: "center",
    backgroundColor: "#FAF2F2",
  },
  title: {
    fontSize: '24@ms',
    marginBottom: '2@mvs',
  },
  input: {
    height: 50,
    borderColor: '#D4D4D4',
    backgroundColor: "#D4D4D4",
    borderRadius: 8,
    borderWidth: 1,
    width: 320,
    marginBottom: 20,
    padding: 10,
  },
  forgotPassword: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 0,
    color: '#800000',
  },
  signin: {
    top: 40,
    backgroundColor: "#800000",
    width: 320,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: "center",
  }
});
