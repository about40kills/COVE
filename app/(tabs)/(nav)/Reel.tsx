import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { useRouter } from 'expo-router';
import { Video, ResizeMode } from 'expo-av';
import { useFocusEffect } from 'expo-router';
import { ScaledSheet } from 'react-native-size-matters';
import { firestore } from '@/app/firebaseConfig'; // Ensure the correct path to firebaseConfig
import { collection, query, onSnapshot, DocumentData } from 'firebase/firestore';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Comment from "../../../assets/images/comment.svg";
import Like from "../../../assets/images/like.svg";
import Bookmark from "../../../assets/images/bookmark.svg";
import Share from "../../../assets/images/share.svg";

const { height, width } = Dimensions.get('window');

type UserType = {
  id: string;
  username: string;
  displayName: string;
  birthDate: string;
};
type VideoType = {
  id: string;
  videoUrl: string;
  userId: string;
  description: string;
  likes: string;
  comments: string;
  shares: string;
  createdAt: Date;
  user?: UserType;
};

export default function ReelsScreen() {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const flatListRef = useRef<FlatList<VideoType>>(null);
  const videoRefs = useRef<(Video | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const q = query(collection(firestore, 'reels'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const videoList: VideoType[] = [];
      querySnapshot.forEach((doc: DocumentData) => {
        videoList.push({ id: doc.id, ...doc.data() } as VideoType);
      });
      setVideos(videoList);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    return () => {
      videoRefs.current.forEach((video) => {
        video?.unloadAsync(); // Stop and unload the video when component unmounts
      });
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      videoRefs.current.forEach((video, index) => {
        if (index === currentIndex) {
          video?.playAsync(); // Resume playing current video when screen is focused
        } else {
          video?.pauseAsync(); // Pause other videos when screen is focused
        }
      });

      return () => {
        videoRefs.current.forEach((video) => {
          video?.pauseAsync(); // Pause all videos when screen loses focus
        });
      };
    }, [currentIndex])
  );

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    const newIndex = Math.floor(contentOffsetY / height);
    setCurrentIndex(newIndex);
  };

  const renderItem = useCallback(
    ({ item, index }: { item: VideoType; index: number }) => {
      return (
        <View style={styles.reelItem}>
          <Video
            ref={(ref) => (videoRefs.current[index] = ref)}
            source={{ uri: item.videoUrl }}
            style={styles.reelVideo}
            resizeMode={ResizeMode.COVER}
            isLooping
            useNativeControls={false}
          />

          <View style={{ flex: 1, width: width, height: height, justifyContent: "flex-end" }}>
            <View style={styles.reelInfo}>
              <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#d4d4d4' }} onPress={() => { router.push("../ReelProfile") }}>

                  </TouchableOpacity>
                  <Text style={styles.reelUser}>{item.user?.displayName}</Text>
                  <TouchableOpacity style={styles.followButton} onPress={() => router.push('/reelprofile')}>
                    <Text style={styles.followButtonText}>Follow</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.reelDescription}>{item.description}</Text>

              </View>
              <View style={styles.reelActions}>
                <View style={{ gap: 5 }}>
                  <Like />
                  <Text style={styles.reelActionText}>{item.likes}</Text>
                </View>
                <View style={{ gap: 5 }}>
                  <Comment />
                  <Text style={styles.reelActionText}>{item.comments}</Text>
                </View>
                <View style={{ gap: 5 }}>
                  <Bookmark />
                  <Text style={styles.reelActionText}>{item.shares}</Text>
                </View>
                <View style={{ gap: 5 }}>
                  <Share />
                  <Text style={styles.reelActionText}>{item.shares}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      );
    },
    [router]
  );

  return (
    <GestureHandlerRootView style={styles.container}>
    
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        ref={flatListRef}
        renderItem={renderItem}
        snapToInterval={height}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={handleScrollEnd}
        initialNumToRender={3}
        maxToRenderPerBatch={5}
        windowSize={10}
      />
    </GestureHandlerRootView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  reelItem: {
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reelVideo: {
    width: '100%',
    height: '100%',
  },
  reelInfo: {
    position: 'absolute',
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 0,
    width: width,
    padding: 10,
    alignItems: 'center',
  },
  reelUser: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  reelDescription: {
    fontSize: 14,
    color: '#ffffff',
  },
  reelActions: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 20,
    bottom: 50,
    color: '#fff',
  },
  followButton: {
    backgroundColor: '#8B0000',
    padding: 7,
    borderRadius: 45,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followButtonText: {
    color: '#ffffff',
    fontSize: 13,
  },
  reelActionText: {
    color: '#ffffff',
    fontSize: 13,
  },
  addButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 25,
    zIndex: 1,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
