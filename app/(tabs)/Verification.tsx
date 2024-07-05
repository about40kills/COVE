import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function VerificationScreen() {
  const [code, setCode] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View  style={{top: 200}}>
      <View style={{marginBottom: 35,alignItems: 'center'}}>
      <Text style={styles.title}>Enter your confirmation code</Text>
      <Text style={{fontSize: 12}}>An OTP code was sent to +2330254475211</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Confirmation Code"
        value={code}
        onChangeText={setCode}
      />
      <TouchableOpacity style={styles.verify} onPress={() => router.push('/SignUpName')} >
        <Text style={{color: "#ffffff"}}>Verify</Text>
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
  },
  input: {
    height: 50,
    borderColor: '#D4D4D4',
    backgroundColor: "#D4D4D4",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  verify: {
    top: 25,
    backgroundColor: "#800000",
    width: 320,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: "center",
  }
});
