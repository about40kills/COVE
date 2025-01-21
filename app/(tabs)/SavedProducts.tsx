import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';


const SavedProducts = () => {
  const savedProducts = [
    { id: 1, title: 'Iphone 15 pro max 256 GB', price: 'GHS 2100.00', image: require('../../assets/assets/rectangle-61.png') },
    { id: 2, title: 'Iphone 15 pro max 256 GB', price: 'GHS 2100.00', image: require('../../assets/assets/rectangle-61.png') },
    { id: 3, title: 'Iphone 15 pro max 256 GB', price: 'GHS 2100.00', image: require('../../assets/assets/rectangle-61.png') },
    { id: 4, title: 'Iphone 15 pro max 256 GB', price: 'GHS 2100.00', image: require('../../assets/assets/rectangle-61.png') },
    { id: 5, title: 'Iphone 15 pro max 256 GB', price: 'GHS 2100.00', image: require('../../assets/assets/rectangle-61.png') },
    { id: 6, title: 'Iphone 15 pro max 256 GB', price: 'GHS 2100.00', image: require('../../assets/assets/rectangle-61.png') },
    { id: 7, title: 'Iphone 15 pro max 256 GB', price: 'GHS 2100.00', image: require('../../assets/assets/rectangle-61.png') },
    // Add more saved products as needed
  ];

  return (
   <View style={{top: 30,backgroundColor: "#faf2f2",height: "100%"}}>
     <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.screenTitle}>Saved Products</Text>

      <View style={styles.productsGrid}>
        {savedProducts.map((product) => (
          <TouchableOpacity key={product.id} style={styles.productCard} onPress={()=> router.push("./ProductDetails")}>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    marginBottom: 20,
    borderRadius: 15,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  productTitle: {
    fontSize: 14,
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#800000',
  },
});

export default SavedProducts;
