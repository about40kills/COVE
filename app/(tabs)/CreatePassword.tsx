import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ForgotPasswordScreen() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
       <View style={{top: 200}}>
       <View style={{alignItems: 'center',marginBottom: 30}}>
      <Text style={styles.title}>Create new password</Text>
      </View>
      <View style={{marginBottom: 20}}>
        <Text style={{bottom: 2,color: "#3A3A3A",fontSize: 15}}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={{top: 2,color: "#3A3A3A",fontSize: 10}}>Password must be 8 or more characters</Text>
      </View>
      <View>
        <Text style={{bottom: 2,color: "#3A3A3A",fontSize: 15}}>Confirm password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      </View>
    
        <TouchableOpacity style={styles.verify} onPress={()=> router.push("./Signin")}>
          <Text style={{color:'#ffffff'}}>Done</Text>
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

