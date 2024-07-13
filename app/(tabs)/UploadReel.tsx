// UploadReelScreen.tsx
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'expo-router';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/app/firebaseConfig'; // Ensure the correct path to firebaseConfig
import { getAuth } from 'firebase/auth';
import { Video, ResizeMode } from 'expo-av';

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export default function UploadReelScreen() {
  const [video, setVideo] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const pickVideo = async () => {
    // Request permission to access camera roll
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
    }
  };

  const uploadVideo = async () => {
    if (!video) return;

    setUploading(true);
    try {
      const response = await fetch(video);
      const blob = await response.blob();

      const storageRef = ref(storage, `reels/${Date.now()}-${Math.random().toString(36).substring(7)}`);
      const snapshot = await uploadBytes(storageRef, blob);
      const downloadURL = await getDownloadURL(snapshot.ref);

      // Save video metadata to Firestore
      await addDoc(collection(firestore, 'reels'), {
        videoUrl: downloadURL,
        user: 'Braintech', // Replace with actual user data
        description: 'Lorem ipsum dolor sit amet.',
        likes: '0',
        comments: '0',
        shares: '0',
        createdAt: new Date(),
      });

      console.log('Video uploaded successfully:', downloadURL);
      router.push('/Reel');
    } catch (error) {
      console.error('Error uploading video:', error);
      Alert.alert('Upload Failed', 'There was an error uploading the video. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.pickButton} onPress={pickVideo}>
        <Text style={styles.buttonText}>Pick a Video from Camera Roll</Text>
      </TouchableOpacity>
      {video && (
        <>
          <Text>Selected Video:</Text>
          <Video source={{ uri: video }} style={styles.thumbnail} useNativeControls resizeMode={ResizeMode.CONTAIN} isLooping />
          <TouchableOpacity style={styles.uploadButton} onPress={uploadVideo} disabled={uploading}>
            <Text style={styles.buttonText}>Upload Video</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAF2F2',
    padding: 20,
  },
  pickButton: {
    backgroundColor: '#800000', 
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  uploadButton: {
    backgroundColor: '#800000', 
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginVertical: 20,
  },
});
