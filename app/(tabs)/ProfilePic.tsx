import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';


const avatars = [
  { id: '1', imageUrl: require('../../assets/images/Profile.png') },
  { id: '2', imageUrl: require("../../assets/images/Profile.png")},
  // Add more avatars as needed
];

const {height} = Dimensions.get("window");

export default function ProfilePicture() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={{top: 150}}>
      <Text style={styles.header}>Choose profile picture</Text>
      
      <View style={styles.profileCircle}>
      
        <Image style={styles.addIcon} source={require("../../assets/images/BlackLogo.png")} />
        <TouchableOpacity style={{height: 40,width: 40,backgroundColor: '#800000',borderRadius: 50,alignItems: "center",justifyContent: 'center',position: 'absolute',left: 160,bottom: 120}}>
        <Image style={{height: 20,width: 20}} source={require("../../assets/images/add plus Large.png")} />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.subHeader}>or choose a Cove avatar</Text>
      <FlatList
        data={avatars}
        keyExtractor={(item) => item.id}
        numColumns={4}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.avatarCircle}>
            <Image style={styles.avatarImage} source={item.imageUrl} />
          </TouchableOpacity>
        )}
      />
      <View style={{bottom:220,gap: 5}} >
      <TouchableOpacity style={styles.nextButton} onPress={() => router.push("./(nav)")}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width: 320,height: 50,borderColor: "#800000",borderRadius: 50,borderWidth: 1.5}} onPress={() => router.push("./(nav)")}>
        <Text style={styles.skipText}>skip</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        top: 30,
        backgroundColor: '#efefef',
    
        
      },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  profileCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: '#3a3a3a',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  addIcon: {
    width: 150,
    height: 150,
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  avatarImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  nextButton: {
    backgroundColor: '#8B0000',
    width: 320,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: "center",

  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    
  },
  skipText: {
    textAlign: 'center',
    color: '#8B0000',
    marginTop: 10,
  },
});
