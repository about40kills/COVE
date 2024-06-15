import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView, Dimensions } from 'react-native';


const {height} = Dimensions.get("window")

export default function ReelProfileScreen() {
  return (
    <View style={styles.container}>
        <ImageBackground />
        <ScrollView style={{backgroundColor: '#ffffff',borderRadius:30,top: 170,height: 700}}>
        <View style={{flexDirection: 'column'}}>
      <View style={styles.profileHeader}>
        <Image  style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Braintech Graphics</Text>
          <Text style={styles.profileHandle}>@braintechgh • 568.9K Followers</Text>
          
        </View>
      </View>
          <Text style={[styles.profileDescription,{marginVertical: 0,}]}>Description</Text>
          <Text style={styles.profileDescription}>
            Lorem ipsum dolor sit amet consectetur. Amet non fringilla ultricies et tempor arcu.
          </Text>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Reels</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Products</Text>
        </TouchableOpacity>
      </View>
      
        <View style={styles.content}>
        <View style={{width: 110,height: 150,backgroundColor: '#d4d4d4',borderRadius: 5}}>

        </View>
        <View style={{width: 110,height: 150,backgroundColor: '#d4d4d4',borderRadius: 5}}>

        </View>
        <View style={{width: 110,height: 150,backgroundColor: '#d4d4d4',borderRadius: 5}}>

        </View>
        <View style={{width: 110,height: 150,backgroundColor: '#d4d4d4',borderRadius: 5}}>

        </View>
        <View style={{width: 110,height: 150,backgroundColor: '#d4d4d4',borderRadius: 5}}>

        </View>
        <View style={{width: 110,height: 150,backgroundColor: '#d4d4d4',borderRadius: 5}}>

        </View>
        <View style={{width: 110,height: 150,backgroundColor: '#d4d4d4',borderRadius: 5}}>

        </View>
        <View style={{width: 110,height: 150,backgroundColor: '#d4d4d4',borderRadius: 5}}>

        </View>
        <View style={{width: 110,height: 150,backgroundColor: '#d4d4d4',borderRadius: 5}}>

        </View>
        <View style={{width: 110,height: 150,backgroundColor: '#d4d4d4',borderRadius: 5}}>

        </View>
        <View style={{width: 110,height: 150,backgroundColor: '#d4d4d4',borderRadius: 5}}>

        </View>
        <View style={{width: 110,height: 150,backgroundColor: '#d4d4d4',borderRadius: 5}}>

        </View>
        <View style={{width: 110,height: 150,backgroundColor: '#d4d4d4',borderRadius: 5}}>

        </View>
        <View style={{width: 110,height: 150,backgroundColor: '#d4d4d4',borderRadius: 5}}>

        </View>
        <View style={{width: 110,height: 150,backgroundColor: '#d4d4d4',borderRadius: 5}}>

        </View>
        </View>
        </ScrollView>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
       
        top: 30,
        backgroundColor: '#FAF2F2'
      },
  profileHeader: {
    flexDirection: 'row',
    padding: 16,
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#eee',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileHandle: {
    fontSize: 14,
    color: '#888',
  },
  profileDescription: {
    fontSize: 14,
    color: '#888',
    marginVertical: 8,
    width: '80%',
     alignSelf: 'center'
  },
  followButton: {
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 40,
    alignItems: 'center',
    width: '90%',
    marginBottom: 10,
    alignSelf: 'center'
  },
  followButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
  },
  content: {
    padding: 16,
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
    gap: 10,
    
    

  },
});
