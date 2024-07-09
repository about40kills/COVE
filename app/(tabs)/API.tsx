import { firestore, auth } from "../firebaseConfig";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
  DocumentData,
  QuerySnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";

export type Message = {
  id: string;
  name: string;
  lastMessage: string;
  avatar: any;
  timestamp: string;
  formattimestamp: string;
};

export const useChannelMessages = (
  spaceId: string,
  channelId: string
): Message[] => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const q = query(
      collection(
        firestore,
        "spaces",
        spaceId,
        "channels",
        channelId,
        "messages"
      ),
      orderBy("timestamp")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages: Message[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        lastMessage: doc.data().lastMessage,
        avatar: doc.data().avatar,
        timestamp: doc.data().timestamp,
        formattimestamp: doc.data().formattimestamp,
      }));
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, [spaceId, channelId]);

  return messages;
};

export const sendMessageToChannel = async (
  spaceId: string,
  channelId: string,
  message: string
) => {
  const user: User | null = auth.currentUser;
  if (!user) {
    throw new Error("User not authenticated");
  }

  try {
    await addDoc(
      collection(
        firestore,
        "spaces",
        spaceId,
        "channels",
        channelId,
        "messages"
      ),
      {
        name: user.uid ?? "Unknown", // Use displayName or default to "Unknown"
        lastMessage: message,
        avatar: user.photoURL ?? null, 
        timestamp: new Date().toISOString(),// Use photoURL or default to null
        formattimestamp: new Date().toISOString().slice(0, 16).replace('T', ' ') // Ensure timestamp is correctly formatted
      }
    );
  } catch (error) {
    console.error("Error sending message:", error);
    throw new Error("Failed to send message");
    // Handle error as per your application's requirements
  }
};
