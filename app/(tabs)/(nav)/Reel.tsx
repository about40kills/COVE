import React, { useState, useRef,useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, NativeSyntheticEvent, NativeScrollEvent, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Video } from 'expo-av';
import { useFocusEffect } from 'expo-router';
import { ScaledSheet } from 'react-native-size-matters';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Comment from "../../../assets/images/comment.svg"
import Like from "../../../assets/images/like.svg"
import Bookmark from "../../../assets/images/bookmark.svg"
import Share from "../../../assets/images/share.svg"

const reels = [
  { id: '1', user: 'Braintech', description: 'Lorem ipsum dolor sit amet.', likes: '167.8K', comments: '20K', shares: '5K', videoUrl: require("../../../assets/videos/9ebcc95641ae4a629a5caab36c170e05_1709154201486.mp4") },
  { id: '2', user: 'Braintech', description: 'Lorem ipsum dolor sit amet.', likes: '167.8K', comments: '20K', shares: '5K', videoUrl: require('../../../assets/videos/50c7f1b9b5fc470d80c78932cb3ad408_1713284528574.mp4') },
  { id: '3', user: 'Braintech', description: 'Lorem ipsum dolor sit amet.', likes: '167.8K', comments: '20K', shares: '5K', videoUrl: require('../../../assets/videos/017b9139321f4284858f81fdc710bd75_1713915175561.mp4') },
];

const { height } = Dimensions.get('window');
const {width} = Dimensions.get("window");

export default function ReelsScreen() {
  interface VideoItem {
    id: string;
    videoUrl: any;
    user: string;
    description: string;
    likes: string;
    comments: string;
    shares: string;
  }

  interface VideoListProps {
    videos: VideoItem[];
  }

  const VideoList: React.FC<VideoListProps> = ({ videos }) => {
    const flatListRef = useRef<FlatList<VideoItem>>(null);
    const videoRefs = useRef<(Video | null)[]>([]); // Change to Video from expo-av
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();

    
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

    const renderItem = ({ item, index }: { item: VideoItem, index: number }) => {
      return (
        <View style={styles.reelItem}>
          <Video
            ref={(ref) => (videoRefs.current[index] = ref)}
            source={item.videoUrl}
            style={styles.reelVideo}
            resizeMode="cover"
            isLooping
            useNativeControls={false}
          />
          
          <View style={{flex: 1,width: width,height: height, justifyContent: "flex-end"}}>
          <View style={styles.reelInfo}>
            <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <View style={{display: 'flex',flexDirection: 'row',justifyContent: "space-between",alignItems: 'center',gap: 10,marginBottom: 10}}>
                <TouchableOpacity style={{width: 40, height: 40,borderRadius: 50,backgroundColor: '#d4d4d4'}} onPress={()=>{router.push("../ReelProfile")}}>

                </TouchableOpacity>
              <Text style={styles.reelUser}>{item.user}</Text>
              <TouchableOpacity style={styles.followButton} onPress={() => router.push('/reelprofile')}>
                <Text style={styles.followButtonText}>Follow</Text>
              </TouchableOpacity>
              </View>
            
            <Text style={styles.reelDescription}>{item.description}</Text>
            
            </View>
            <View style={styles.reelActions}>
              <View style={{gap: 5}}>
                <Like />
              <Text style={styles.reelActionText}>{item.likes}</Text>
              </View>
              <View style={{gap: 5}}>
                <Comment />
                <Text style={styles.reelActionText}>{item.comments}</Text>
              </View>
              <View style={{gap: 5}}>
                <Bookmark />
                <Text style={styles.reelActionText}>{item.shares}</Text>
              </View>
              <View style={{gap: 5}}>
                <Share />
                <Text style={styles.reelActionText}>{item.shares}</Text>
              </View>
            </View>
          </View>
          </View>
          </View>
          
      );
    };

    return (
      <View style={styles.container}>
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
        />
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <VideoList videos={reels} />
    </GestureHandlerRootView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF2FA",
    
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
    display:'flex',
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
    bottom: 0,
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
});


