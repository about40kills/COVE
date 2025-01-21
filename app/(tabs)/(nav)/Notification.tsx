import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';

const notifications = [
  { id: '1', text: 'Lorem ipsum dolor sit amet, consectetur.', time: '2d' },
  { id: '2', text: 'Lorem ipsum dolor sit amet, consectetur.', time: '2d' },
  { id: '3', text: 'Lorem ipsum dolor sit amet, consectetur.', time: '2d' },
  { id: '4', text: 'Lorem ipsum dolor sit amet, consectetur.', time: '2d' },
  { id: '5', text: 'Lorem ipsum dolor sit amet, consectetur.', time: '2d' },
  { id: '6', text: 'Lorem ipsum dolor sit amet, consectetur.', time: '2d' },
  { id: '7', text: 'Lorem ipsum dolor sit amet, consectetur.', time: '2d' },
  { id: '8', text: 'Lorem ipsum dolor sit amet, consectetur.', time: '2d' },
  { id: '9', text: 'Lorem ipsum dolor sit amet, consectetur.', time: '2d' },
  { id: '10', text: 'Lorem ipsum dolor sit amet, consectetur.', time: '2d' },
  { id: '11', text: 'Lorem ipsum dolor sit amet, consectetur.', time: '2d' },
  { id: '12', text: 'Lorem ipsum dolor sit amet, consectetur.', time: '2d' },
  { id: '13', text: 'Lorem ipsum dolor sit amet, consectetur.', time: '2d' },
  { id: '14', text: 'Lorem ipsum dolor sit amet, consectetur.', time: '2d' },
  { id: '15', text: 'Lorem ipsum dolor sit amet, consectetur.', time: '2d' },
  // Add more notification items as needed
];

export default function Notification() {
  return (
    <View style={styles.container}>
     <View style={{top:50,gap:20,padding: 5,backgroundColor: 'white', width:"100%",borderTopRightRadius: 50,borderTopLeftRadius: 50}}>
      <Text style={{alignSelf:"center",fontSize: 40}}>Notification</Text>
     <TextInput style={styles.searchInput} placeholder="Search" />
      <FlatList
      showsVerticalScrollIndicator={false}
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <View style={styles.avatar} />
            <View style={styles.notificationText}>
              <Text style={{fontSize:17,overflow: 'hidden',lineHeight:27}}>{item.text}</Text>
              <Text style={styles.notificationTime}>{item.time}</Text>
            </View>
          </View>
        )}
      />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    top: 30,
    backgroundColor: '#FAF2F2',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 16,
    marginBottom: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    marginLeft:10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    height: 100,
    width: 300,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#ccc',
    marginRight: 16,
  },
  notificationText: {
    flex: 1,
    display: 'flex',
    
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  notificationTime: {
    alignSelf: "center",
    color: '#888',
    fontSize: 12,
  },
});


