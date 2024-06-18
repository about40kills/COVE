import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Modal,Alert,Pressable, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { lightTheme, darkTheme } from './Themes';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../firebaseConfig"
import axios from 'axios'


export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [options, setOptions] = useState(true);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const router = useRouter();

  const handleOption1 = ()=> {
    if (counter1 < 1) {
      setOptions(!options)
    }
    setCounter1(1)
    setCounter2(0);
  }
  const handleOption2 = ()=> {
    if (counter2 < 1) {
      setOptions(!options)
    }
    setCounter2(1)
    setCounter1(0);
  }
 

  async function createUser(email:string, password: string) {
    try {
      const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCo1OOCzf2RhK_Dol9eKj67MBweQy4zsMs',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
      
      console.log('User created successfully:', response.data);
      return response.data; // Optionally return data for further processing
  
    } catch (error) {
      console.error('Error creating user:');
      throw error; // Rethrow the error or handle as needed
    }
  }

  const handleSignup = async () => {
    try {
    
      if(options == true) {
        if(email == "") {
          setModalMessage('Email cannot be empty.');
          setModalVisible(true);
        }
      }else{
        if(phone == "") {
          setModalMessage('Phone number cannot be empty.');
          setModalVisible(true);
        }
      }
      if( password == ""){
        setModalMessage('Password cannot be empty.');
        setModalVisible(true);
      }else if ( password != confirmPassword){
        setModalMessage('Passwords do not match.');
        setModalVisible(true);
      }else{
      try{
        const response = await createUserWithEmailAndPassword(Auth, email, password);
      setModalMessage(`User created at: ${response.user.email}`);
      setModalVisible(true);

      // If successful, navigate to next screen
      router.push('/SignUpName');
      }catch(error){
        setModalMessage(`Error occured during signup with firebase`);
        setModalVisible(true);
      }
      }
      }catch (error) {
        setModalMessage('Error occured during signup');
        setModalVisible(true);
      }

      }
     
  return (
    <View style={[styles.container,]}>
       <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{modalMessage}</Text>
          <Pressable
            style={[styles.buttonm, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
      <View style={{top: 150}}>
      <View style={{justifyContent: "center", alignItems: 'center',bottom: 20}}>
      <Image source={require("../../assets/images/LogoRed.png")} />
      </View>
      <Text style={styles.title}>Use email or phone</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={[styles.button,{backgroundColor: options ? "#FAF2F2": "transparent"}]} onPress={handleOption1}>
          <Text style={[styles.text,{color: options? "black" : "#FAF2F2"}]}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor: options ? 'transparent':"#FAF2F2"}]} onPress={handleOption2} >
          <Text style={[styles.text,{color: options? "#FAF2F2" : "black"}]}>Phone</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder={options ? "Email" : "Phone"}
        value={options? email : phone}
        onChangeText={options ? setEmail : setPhone}
      />
      <View>
        <Text style={{top: 13,color: "#3A3A3A",fontSize: 15}}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={{color: "#3A3A3A",fontSize: 10}}>Password must be 8 or more characters</Text>
      </View>
      <View>
        <Text style={{top: 13,color: "#3A3A3A",fontSize: 15}}>Confirm password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      </View>
      
      <TouchableOpacity style={styles.next} onPress={handleSignup}>
        <Text style={{color: "#ffffff"}}>Next</Text>
      </TouchableOpacity>
      </View>
    </View>
  );

};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
    top: 30,
    backgroundColor: "#faf2f2"
  },
  title: {
    alignSelf: "center",
    fontSize: 24,
    marginBottom: 20,
  },
  button:{
    justifyContent: "center",
   width: 154 ,
   height: 40,
   borderRadius: 6,
  }
  ,
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
    marginBottom: 20,
    top: 10,
    backgroundColor: "#C4C4C4",
    height: 45,
    width: 320,
    borderRadius: 8
  },
  text:{
    alignSelf: "center",
  },
  input: {
    top: 15,
  
    height: 50,
    width: 320,
    backgroundColor: "#C4C4C4",
    borderColor: '#C4C4C4',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 8
  },
  next: {
    top: 40,
    backgroundColor: "#800000",
    width: 320,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonm: {
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 3,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#800000',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});
