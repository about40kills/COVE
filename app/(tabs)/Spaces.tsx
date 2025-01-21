import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Spaces = () => {
  return (
    <View style={{height: 555,justifyContent: 'space-between',alignItems: 'center',}}>
      <View>
      <Text style={styles.title}>Spaces</Text>
      </View>
      <View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Create your Space</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => {}}>
        <Text style={styles.buttonText}>Join a Space</Text>
      </TouchableOpacity>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginTop: 10,
      },
      button: {
        backgroundColor: '#8B0000',
        padding: 10,
        borderRadius: 50,
        width: 280,
        height: 50,
        alignItems: 'center',
        marginBottom: 10,
        
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      },
      secondaryButton: {
        backgroundColor: '#ccc',
      },
})

export default Spaces