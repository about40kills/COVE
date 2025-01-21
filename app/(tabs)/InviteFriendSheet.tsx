import React, { useRef, useMemo } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const contactsData = [
  { id: '1', name: 'Lavina Alexander' },
  { id: '2', name: 'Jane Doe' },
  // more contacts...
];

const InviteFriendPage = () => {
  const sheetRef = useRef(null);

  // Define snap points
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const renderContent = () => (
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
  );

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        {renderContent()}
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

export default InviteFriendPage;



