import React, { useMemo, useRef, useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useRouter } from 'expo-router';
import { BottomSheetModal,BottomSheetModalProvider } from '@gorhom/bottom-sheet';


const friendsData = [
  { id: '1', name: 'Courtney Henry', status: 'online' },
  { id: '2', name: 'Kathryn Murphy', status: 'online' },
  // more friends...
];
const contactsData = [
  { id: '1', name: 'Lavina Alexander' },
  { id: '2', name: 'Jane Doe' },
  // more contacts...
];
const FriendsPage = () => {
  const router = useRouter();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [isInviteVisible, setIsInviteVisible] = useState(false);

  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  useEffect(() => {
    if (isInviteVisible) {
      bottomSheetModalRef.current?.present();
    }
  }, [isInviteVisible]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Friends</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setIsInviteVisible(true)}
        >
          <Text style={styles.addButtonText}>Add Friends</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.requestsButton}
        onPress={() => router.push('./FriendsRequestPage')}
      >
        <Text style={styles.requestsButtonText}>Friend Requests</Text>
        <View style={styles.requestsSubTextContainer}>
          <Text style={styles.requestsSubText}>6 received</Text>
          <Text style={styles.requestsSubText}>2 sent</Text>
        </View>
      </TouchableOpacity>
      <FlatList
        data={friendsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text>{item.name}</Text>
            <TouchableOpacity>
              <Text>Call</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onDismiss={() => setIsInviteVisible(false)}
      >
        <View style={styles.contentContainer}>
          <TextInput style={styles.searchBox} placeholder="Search" />
          <FlatList
            data={contactsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.contactItem}>
                <Text>{item.name}</Text>
                <TouchableOpacity>
                  <Text>Invite</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </BottomSheetModal>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf2f2',
    padding: '10@s',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'black',
  },
  addButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#800000',
  },
  addButtonText: {
    color: '#ffffff',
  },
  requestsButton: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    marginTop: '30@s',
    padding: '8@s',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#c4c4c4',
  },
  requestsButtonText: {
    fontSize: 20,
  },
  requestsSubTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    marginTop: 5,
  },
  requestsSubText: {
    fontSize: 12,
  },
  friendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '15@s',
    borderBottomWidth: '1@s',
    borderBottomColor: '#ccc',
  },
  contentContainer: {
    padding: 20,
  },
  searchBox: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FriendsPage;



