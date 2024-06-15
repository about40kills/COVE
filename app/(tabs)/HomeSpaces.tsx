import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const spaces = [
  { id: '1', name: 'Minions Club', image: require('../../assets/images/Dummy.png') },
  { id: '2', name: 'Other Club', image: require('../../assets/images/Dummy.png') },
  // Add more space items here
];

const channels = [
  { id: '1', name: 'VOICE BENCH', icon: '#' },
  { id: '2', name: 'TEXT BENCH', icon: '>' },
  // Add more channels here
];

export default function HomeSpaces() {
  return (
    
      <ScrollView>
        
        <Image source={require('../../assets/images/Dummy.png')} style={styles.clubImage} />
        <View style={{position: 'absolute',backgroundColor: "#3a3a3a",borderRadius: 20,top: 20,left: 5}}>
        <Text style={styles.clubName}>Minions Club</Text>
        </View>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <View style={styles.channelContainer}>
          <Text style={styles.channelTitle}>Browse Channels</Text>
          <FlatList
            data={channels}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.channelItem}>
                <Text style={styles.channelIcon}>{item.icon}</Text>
                <Text style={styles.channelName}>{item.name}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  spacesContainer: {
    flexDirection: 'row',
  },
  spaceItem: {
    marginRight: 10,
  },
  spaceImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageIconContainer: {
    padding: 10,
  },
  messageIcon: {
    width: 30,
    height: 30,
  },
  clubImage: {
    width: '100%',
    height: 170,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  clubName: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: "#ffffff"
  },
  searchInput: {
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  channelContainer: {
    padding: 10,
  },
  channelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  channelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  channelIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  channelName: {
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 30,
    height: 30,
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
  },
});

