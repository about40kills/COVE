import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignUpNameScreen() {
  const [name, setName] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
     <View style={{top: 250,}}>
     <View style={{justifyContent: "center",alignItems: 'center'}}>
     <Text style={styles.title}>What's your name?</Text>
     </View>
      <View>
        <Text style={{bottom: 2,color: "#3A3A3A"}}>Display name</Text>
      <TextInput
        style={styles.input}
        placeholder="Display Name"
        value={name}
        onChangeText={setName}
      />
      <Text style={{top: 2,color: "#3A3A3A"}}>Emoji and special characters can be used</Text>
      </View>
      <TouchableOpacity style={styles.next} onPress={() => router.push('/SignUpDetails')} >
        <Text style={{color: "#ffffff"}}>Next</Text>
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
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  next: {
    top: 40,
    backgroundColor: "#800000",
    width: 320,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: "center",
  }
});
