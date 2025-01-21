import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function FindFriendsScreen() {
  return (
    <View style={styles.container}>
     <View style={{width: 270,alignItems: 'center',height: 220,borderWidth:2,borderColor: "#D4D4D4",borderRadius: 30,}}>
      <Text style={styles.title}>Find your friends</Text>
      <Text style={styles.subtitle}>Sync your contacts to find People you know on Cove.</Text>
      <View style={{gap: 10}}>
      <TouchableOpacity style={styles.allow} onPress={() => {}}>
        <Text style={{color: '#ffffff'}}>Allow</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.allow,{backgroundColor: "#D4D4D4"}]} onPress={() => {router.push("./ProfilePic")}}> 
        <Text style={{color: '#000000'}}>Skip</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#FAF2F2",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 5,
  },
  allow: {
    top: 15,
    backgroundColor: "#800000",
    width: 200,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: "center",
  }
});
