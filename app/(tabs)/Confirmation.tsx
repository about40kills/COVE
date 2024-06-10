import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ForgotPasswordScreen() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
       <View style={{top: 200}}>
       <View style={{alignItems: 'center'}}>
      <Text style={styles.title}>Enter your confirmation code</Text>
      <Text  style={{fontSize: 12}}>An OTP code was sent to +233254475211</Text>
      </View>
      <TextInput
        style={styles.input}
        value={emailOrPhone}
        onChangeText={setEmailOrPhone}
      />
      <View style={{display: "flex",flexDirection: 'row',flexWrap: 'nowrap'}}>
      <Text>Didn't receive any code? </Text><Text style={{color: "#800000"}}>Resend</Text>
      </View>
        <TouchableOpacity style={styles.verify} onPress={()=> router.push("./CreatePassword")}>
          <Text style={{color:'#ffffff'}}>Create new password</Text>
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
    padding: 10,
    marginTop: 50,
  },
  verify: {
    top: 10,
    marginTop: 40,
    backgroundColor: "#800000",
    width: 320,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: "center",
  }
});