import React,{useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Received from './Received';
import Sent from './Sent';


const FriendRequestsReceivedPage = () => {

  const [options, setOptions] = useState(true);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(0);

  const handleOption1 = ()=> {
    if (counter1 < 1) {
      setOptions(!options)
    }
    setCounter1(1)
    setCounter2(0);
    setCurrentScreen('Received')
  }
  const handleOption2 = ()=> {
    if (counter2 < 1) {
      setOptions(!options)
    }
    setCounter2(1)
    setCounter1(0);
    setCurrentScreen('Sent')
  }

  
  const [currentScreen, setCurrentScreen] = useState('Received');

  const renderContent = () => {
    switch (currentScreen) {
      case 'Received':
        return <Received />;
      case 'Sent':
        return <Sent />;
      default:
        return <Received />;
    }
  };


  return (
    <View style={styles.container}>
      <Text style={{alignSelf: 'center',fontSize: 25,marginTop: 30}}>Friend Request</Text>
      <View style={styles.inputContainer}>
                  <TouchableOpacity style={[styles.button, { backgroundColor: options ? "#FAF2F2" : "transparent" }]} onPress={handleOption1}>
                    <Text style={styles.text}>Received</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.button, { backgroundColor: options ? 'transparent' : "#FAF2F2" }]} onPress={handleOption2}>
                    <Text style={styles.text}>Sent</Text>
                  </TouchableOpacity>
                </View>
      <View>
      {renderContent()}
      </View>
    </View>
  );
};

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
    color: 'black'
  },
});

export default FriendRequestsReceivedPage;
