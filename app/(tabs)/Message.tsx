import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity,ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';


export default function SpacesScreen() {
  const router = useRouter();

  return (
    <View style={{height: 555,justifyContent: 'space-between',}}>
      <View>
      <Text style={styles.title}>Messages</Text>
      <View style={{marginTop: 10,display: 'flex',flexDirection: 'row',alignItems: 'center',alignSelf: 'center',borderRadius: 16,gap: 10,width: 320,height: 50,backgroundColor: '#FAF2F2'}}>
        <Image source={require("../../assets/images/Search 1.png")} />
        <Text style={{color: '#800000'}}>Search</Text>
      </View>
      </View>
      <View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Add Friends</Text>
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
    alignItems: 'center',
    backgroundColor: '#FAF2F2',
  },
  title: {
    fontSize: 24,
    marginTop: 10,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 50,
    width: 280,
    height: 50,
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'center'
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#ccc',
  },
});
