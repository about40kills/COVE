import { useRouter } from 'expo-router';
import React from 'react';
import { KeyboardAvoidingView,Platform, View, Text, TextInput, FlatList, TouchableOpacity, Image, ListRenderItem, Pressable } from 'react-native';
import { ScaledSheet, s, vs } from 'react-native-size-matters';

type Message = {
  id: string;
  name: string;
  lastMessage: string;
  avatar: any;
};

const messages: Message[] = [
  { id: '1', name: 'Brainstorm Graphics', lastMessage: 'Brainstorm is a great', avatar: require('../../assets/images/Profile6.png') },
  { id: '2', name: 'Dianne', lastMessage: 'Let’s discuss the new project.', avatar: require('../../assets/images/Profile3.png') },
  { id: '1', name: 'Brainstorm Graphics', lastMessage: 'Brainstorm is a great', avatar: require('../../assets/images/Profile6.png') },
  { id: '2', name: 'Dianne', lastMessage: 'Let’s discuss the new project.', avatar: require('../../assets/images/Profile3.png') },
  { id: '1', name: 'Brainstorm Graphics', lastMessage: 'Brainstorm is a great', avatar: require('../../assets/images/Profile6.png') },
  { id: '2', name: 'Dianne', lastMessage: 'Let’s discuss the new project.', avatar: require('../../assets/images/Profile3.png') },
  { id: '1', name: 'Brainstorm Graphics', lastMessage: 'Brainstorm is a great', avatar: require('../../assets/images/Profile6.png') },
  { id: '2', name: 'Dianne', lastMessage: 'Let’s discuss the new project.', avatar: require('../../assets/images/Profile3.png') },
  { id: '1', name: 'Brainstorm Graphics', lastMessage: 'Brainstorm is a great', avatar: require('../../assets/images/Profile6.png') },
  { id: '2', name: 'Dianne', lastMessage: 'Let’s discuss the new project.', avatar: require('../../assets/images/Profile3.png') },
  { id: '1', name: 'Brainstorm Graphics', lastMessage: 'Brainstorm is a great', avatar: require('../../assets/images/Profile6.png') },
  { id: '2', name: 'Dianne', lastMessage: 'Let’s discuss the new project.', avatar: require('../../assets/images/Profile3.png') },
  { id: '1', name: 'Brainstorm Graphics', lastMessage: 'Brainstorm is a great', avatar: require('../../assets/images/Profile6.png') },
  { id: '2', name: 'Dianne', lastMessage: 'Let’s discuss the new project.', avatar: require('../../assets/images/Profile3.png') },
  // Add more messages here
];

const MessageItem: React.FC<{ message: Message}> = ({ message }) => (
  <View style={styles.messageItem} >
    <Image source={ message.avatar } style={styles.avatar} />
    <View style={styles.messageText}>
      <Text style={styles.name}>{message.name}</Text>
      <Text style={styles.lastMessage}>{message.lastMessage}</Text>
      <Pressable><Text style={styles.Translate}>Translate to English</Text></Pressable>
    </View>
  </View>
);

const MainMessagePage: React.FC = () => {
  const router = useRouter();

  const renderItem: ListRenderItem<Message> = ({ item }) => (
    <MessageItem
      message={item}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.TopBar}>
      <Text style={styles.Intro}>#Introduction</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MessageItem message={item}  />}
        style={{height: 200}}
      />
      <KeyboardAvoidingView>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Type a message" />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    
  },
  searchInput: {
    height: '40@vs',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: '20@vs',
    margin: '10@s',
    paddingLeft: '15@s',
  },
  Intro:{
    alignSelf:"center",
    fontSize: "20@s",
    marginTop: "30@vs",
    position:"relative"
  },
  TopBar:{
    display: 'flex',
    flexDirection: "row",
    justifyContent:"space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#c4c4c4",
    alignItems: "center",
    marginTop: "30@vs"
  },
  messageItem: {
    flexDirection: 'row',
    padding: '10@s',
   
    borderBottomColor: '#eee',
  },
  avatar: {
    width: '50@s',
    height: '50@s',
    borderRadius: '25@s',
  },
  messageText: {
    marginLeft: '10@s',
    justifyContent: 'center',
  },
  name: {
    fontSize: '15@s',
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: '14@s',
    color: '#666',
  },
  Translate:{
    fontSize:"9@s"
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
    padding: '10@s',
    
  },
  input: {
    flex: 1,
    height: '40@vs',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: '20@vs',
    paddingLeft: '15@s',
    marginTop: "0@vs",
  },
  sendButton: {
    marginLeft: '10@s',
    padding: '10@s',
    backgroundColor: '#800000',
    borderRadius: '20@vs',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: '16@vs',
  },
});

export default MainMessagePage;

