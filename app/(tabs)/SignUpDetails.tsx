import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignUpDetailsScreen() {
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
     <View style={{top: 150}}>
     <View style={{alignItems: 'center'}}>
     <Text style={styles.title}>Create an account</Text>
     </View>
     <View style={{gap: 15}}>
     <View>
        <Text style={{bottom: 2,color: "#3A3A3A",fontSize: 15}}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={{top: 2,color: "#3A3A3A",fontSize: 10}}>Username must be 2-32 characters</Text>
      </View>
      
      
      <View>
        <Text style={{bottom: 2,color: "#3A3A3A",fontSize: 15}}>Date of Birth</Text>
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        value={dob}
        onChangeText={setDob}
      />
      <Text style={{top: 2,color: "#3A3A3A",fontSize: 10}}></Text>
      </View>
     </View>
      <TouchableOpacity style={styles.create} onPress={() => router.push('/FindFriends')}>
        <Text style={{color: "#ffffff"}}>Create account</Text>
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
    marginBottom: 50,
  },
  input: {
    height: 50,
    width: 320,
    borderColor: '#D4D4D4',
    backgroundColor: "#D4D4D4",
    borderRadius: 8,
    borderWidth: 1,

    padding: 10,
  },
  create: {
    top: 25,
    backgroundColor: "#800000",
    width: 320,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: "center",
  }
});
