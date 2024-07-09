import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { useChannelMessages, sendMessageToChannel } from "./API"; // Import functions from API.ts

export type Message = {
  id: string;
  name: string;
  lastMessage: string;
  avatar: any;
  timestamp: string;
  formattimestamp: string;
};

const width = Dimensions.get("window").width;

const MainMessagePage: React.FC = () => {
  const [inputMessage, setInputMessage] = useState<string>("");
  const messages: Message[] = useChannelMessages("spaceID", "channelID"); // Explicitly declare messages as Message[]
  const flatListRef = useRef<FlatList>(null); // Reference for FlatList

  // Sort messages by timestamp
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  useEffect(() => {
    // Scroll to bottom when messages change
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [sortedMessages]);

  // Function to handle sending a message
  const handleSendMessage = async () => {
    try {
      await sendMessageToChannel("spaceID", "channelID", inputMessage); // Replace with actual IDs or props
      setInputMessage(""); // Clear input field after sending message
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle error sending message
    }
  };

  const renderItem = ({ item }: { item: Message }) => (
    <View style={styles.messageItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.messageText}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            alignItems: "center",
          }}
        >
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.Translate}>{item.formattimestamp}</Text>
        </View>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
        <Pressable>
          <Text style={styles.Translate}>Translate to English</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.TopBar}>
        <Text style={styles.Intro}>#Introduction</Text>
      </View>
      <FlatList
        ref={flatListRef}
        data={sortedMessages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={{ flex: 1 }}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        } // Scroll to the bottom on content size change
        onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })} // Scroll to the bottom on layout
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={inputMessage}
          onChangeText={setInputMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: width,
  },
  searchInput: {
    height: "40@vs",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: "20@vs",
    margin: "10@s",
    paddingLeft: "15@s",
  },
  Intro: {
    alignSelf: "center",
    fontSize: "20@s",
    marginTop: "30@vs",
    position: "relative",
  },
  TopBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#c4c4c4",
    alignItems: "center",
    marginTop: "30@vs",
  },
  messageItem: {
    flexDirection: "row",
    padding: "10@s",
    width: "100%",
    borderBottomColor: "#eee",
  },
  avatar: {
    width: "50@s",
    height: "50@s",
    borderRadius: "25@s",
  },
  messageText: {
    marginLeft: "10@s",
    justifyContent: "center",
    width: "85%",
  },
  name: {
    fontSize: "10@s",
    fontWeight: "medium",
  },
  lastMessage: {
    fontSize: "14@s",
    color: "#666",
    display: "flex",
    flexWrap: "wrap",
  },
  Translate: {
    fontSize: "8@s",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#eee",
    padding: "10@s",
  },
  input: {
    flex: 1,
    height: "40@vs",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: "20@vs",
    paddingLeft: "15@s",
    marginTop: "0@vs",
  },
  sendButton: {
    marginLeft: "10@s",
    padding: "10@s",
    backgroundColor: "#800000",
    borderRadius: "20@vs",
  },
  sendButtonText: {
    color: "#fff",
    fontSize: "16@vs",
  },
});

export default MainMessagePage;
