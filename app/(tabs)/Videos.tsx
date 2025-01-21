import React, { useRef, useState } from 'react';
import { View, StyleSheet, FlatList, Dimensions, Text, NativeSyntheticEvent, NativeScrollEvent, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { useRouter } from 'expo-router';

interface VideoItem {
  id: string;
  uri: string;
  user: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
}

interface VideoListProps {
  videos: VideoItem[];
}

const { height } = Dimensions.get('window');

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  const flatListRef = useRef<FlatList<VideoItem>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    const newIndex = Math.floor(contentOffsetY / height);
    setCurrentIndex(newIndex);
  };

  const renderItem = ({ item }: { item: VideoItem }) => {
    return (
      <View style={styles.reelItem}>
        <Video
          source={{ uri: item.uri }}
          style={styles.reelVideo}
          shouldPlay={true}
          isLooping
          useNativeControls={false}
        />
        <View style={styles.reelInfo}>
          <Text style={styles.reelUser}>{item.user}</Text>
          <Text style={styles.reelDescription}>{item.description}</Text>
          <View style={styles.reelActions}>
            <Text>{item.likes} Likes</Text>
            <Text>{item.comments} Comments</Text>
            <Text>{item.shares} Shares</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.followButton} onPress={() => router.push('/reelprofile')}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  reelItem: {
    height,
  },
  reelVideo: {
    width: '100%',
    height: '80%',
    backgroundColor: '#eee',
  },
  reelInfo: {
    padding: 16,
  },
  reelUser: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reelDescription: {
    fontSize: 14,
    color: '#888',
    marginVertical: 8,
  },
  reelActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  followButton: {
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  followButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default VideoList;
