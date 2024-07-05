import { View, Text,FlatList,Image,TouchableOpacity, } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters';

const friendRequestsReceivedData = [
    { id: '1', name: 'Adrian McCoy' },
    { id: '2', name: 'Savannah Nguyen' },
    // more requests...
  ];

const Sent = () => {
  return (
    <View>
      <FlatList
        data={friendRequestsReceivedData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.requestItem}>
            
            <View style={{display: 'flex',flexDirection: 'row',alignItems: 'center',gap:10}}>
            <Image source={require("../../assets/images/Profile (2).png")} style={styles.profileImage}/>
            <View>
            <Text>{item.name}</Text>
            <Text>Braintech</Text>
            </View>
            </View>
            <View style={styles.buttons}>
              
              <TouchableOpacity style={{paddingHorizontal: 10,paddingVertical:5,borderRadius: 50,backgroundColor: "#c4c4c4"}}>
                <Text>Cancel Request</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: '5@s',
    },
    profileImage: {
      width: '50@s',
      height: '50@s',
      borderRadius: '40@s',
    },
    requestItem: {
      alignItems: "center",
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: '10@s',
      borderWidth: "1@s",
      borderColor: '#c4c4c4',
      margin: "5@s",
      padding:'5@s',
      borderRadius:'10@s'
    },
    buttons: {
      flexDirection: 'row',
      gap: '5@s'
    },
    button: {
      justifyContent: "center",
      width: '154@s',
      height: '40@vs',
      borderRadius: 6,
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: "center",
      alignSelf: 'center',
      marginBottom: '20@vs',
      marginTop: '10@vs',
      backgroundColor: "#C4C4C4",
      padding:'10@s',
      width: '95%',
      borderRadius: 8
    },
    text: {
      alignSelf: "center",
    },
  });

export default Sent;