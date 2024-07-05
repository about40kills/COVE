import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

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
        <View style={styles.spaceName}>
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

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  spaceName: {
    position: 'absolute',
    backgroundColor: "#3a3a3a",
    borderRadius: '20@ms',
    paddingHorizontal: '10@ms',
    top: '20@ms',
    left: '5@ms',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10@ms',
  },
  spacesContainer: {
    flexDirection: 'row',
  },
  spaceItem: {
    marginRight: '10@ms',
  },
  spaceImage: {
    width: '50@ms',
    height: '50@ms',
    borderRadius: '25@ms',
  },
  messageIconContainer: {
    padding: '10@ms',
  },
  messageIcon: {
    width: '30@ms',
    height: '30@ms',
  },
  clubImage: {
    width: '100%',
    height: '170@ms',
    borderTopLeftRadius: '30@ms',
    borderTopRightRadius: '30@ms',
  },
  clubName: {
    fontSize: '15@ms',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: '10@ms',
    color: "#ffffff",
  },
  searchInput: {
    backgroundColor: '#f1f1f1',
    borderRadius: '20@ms',
    padding: '10@ms',
    margin: '10@ms',
  },
  channelContainer: {
    padding: '10@ms',
  },
  channelTitle: {
    fontSize: '18@ms',
    fontWeight: 'bold',
    marginBottom: '5@ms',
  },
  channelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '5@ms',
  },
  channelIcon: {
    fontSize: '18@ms',
    marginRight: '10@ms',
  },
  channelName: {
    fontSize: '16@ms',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: '10@ms',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: '30@ms',
    height: '30@ms',
  },
  navText: {
    fontSize: '12@ms',
    marginTop: '5@ms',
  },
});

