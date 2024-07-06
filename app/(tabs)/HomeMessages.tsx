import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const messages = [
  { id: '1', name: 'Jacob Stanley', message: 'Lorem ipsum', time: '12:34 AM', image: require('../../assets/images/Dummy.png') },
  // Add more message items here
];

export default function HomeMessages() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>
      </View>
      

      <TextInput style={styles.searchInput} placeholder="Search" />
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.messageItem} onPress={()=> {router.push("/ChatPage")}}>
            <Image source={item.image} style={styles.messageImage} />
            <View style={styles.messageContent}>
              <Text style={styles.messageName}>{item.name}</Text>
              <Text style={styles.messageText}>{item.message}</Text>
            </View>
            <Text style={styles.messageTime}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    padding: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addIcon: {
    width: 30,
    height: 30,
  },
  searchInput: {
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  messageImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
  },
  messageName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 16,
    color: '#555',
  },
  messageTime: {
    fontSize: 14,
    color: '#aaa',
  },
});
