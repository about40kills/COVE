import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, useColorScheme, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { lightTheme, darkTheme } from './Themes';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [options, setOptions] = useState(true);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(0);
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
  const handleCounter = ()=> {

  }

  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={[styles.container,{backgroundColor: theme.background}]}>
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
      
      <TouchableOpacity style={styles.next} onPress={() => router.push('/SignUpName')}>
        <Text style={{color: "#ffffff"}}>Next</Text>
      </TouchableOpacity>
      </View>
    </View>
  );

  ;
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
    top: 30
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
    top: 20,
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
  }
});
