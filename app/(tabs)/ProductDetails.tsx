import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ProductDetails = () => {
  const similarProducts = [
    { id: 1, title: 'Iphone 15 pro max 256 GB', price: 'GHS 2100.00', image: require('../../assets/assets/rectangle-61.png') },
    { id: 2, title: 'Iphone 15 pro max 256 GB', price: 'GHS 2100.00', image: require('../../assets/assets/rectangle-61.png') },
    { id: 3, title: 'Iphone 15 pro max 256 GB', price: 'GHS 2100.00', image: require('../../assets/assets/rectangle-61.png') },
    { id: 4, title: 'Iphone 15 pro max 256 GB', price: 'GHS 2100.00', image: require('../../assets/assets/rectangle-61.png') },
    { id: 5, title: 'Iphone 15 pro max 256 GB', price: 'GHS 2100.00', image: require('../../assets/assets/rectangle-61.png') },
    { id: 6, title: 'Iphone 15 pro max 256 GB', price: 'GHS 2100.00', image: require('../../assets/assets/rectangle-61.png') },
    { id: 7, title: 'Iphone 15 pro max 256 GB', price: 'GHS 2100.00', image: require('../../assets/assets/rectangle-61.png') },
    { id: 8, title: 'Iphone 15 pro max 256 GB', price: 'GHS 2100.00', image: require('../../assets/assets/rectangle-61.png') },
    // Add more similar products as needed
  ];

  return (
    <View style={{top: 30}}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={require('../../assets/assets/rectangle-61.png')} style={styles.productImage} />

      <View style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
        <View>
        <Text style={styles.productTitle}>Iphone 15 pro max 256 GB</Text>
        <Text style={styles.productPrice}>GHS 2100.00</Text>
        </View>
        <TouchableOpacity style={{alignItems:'center'}} onPress={()=> router.push("./SavedProducts")}>
            <Image source={require("../../assets/assets/group-4030.png")} />
            <Text>save</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      
      <View style={{display: 'flex', flexDirection: 'row',justifyContent: 'space-between',gap: 10}}>
      <TouchableOpacity style={styles.contactButton}>
        <Text style={[styles.buttonText,{color: 'black'}]}>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buttonText}>Start Order</Text>
      </TouchableOpacity>
      </View>
      
      <Text style={styles.sectionTitle}>Seller Information</Text>
      <View style={styles.sellerInfo}>
        <View style={{display: "flex",flexDirection: 'row',alignItems: 'center'}}>
        <Image source={require('../../assets/assets/ellipse-1737.png')} style={styles.sellerImage} />
        <View>
        <Text style={styles.sellerName}>Braintech Graphics</Text>
        <Text style={{fontSize:10}}>Joined cove 3 months ago</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.sectionTitle}>Similar Products</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {similarProducts.map((product) => (
          <View key={product.id} style={styles.similarProductCard}>
            <Image source={product.image} style={styles.similarProductImage} />
            <Text style={styles.similarProductTitle}>{product.title}</Text>
            <Text style={styles.similarProductPrice}>{product.price}</Text>
          </View>
        ))}
      </ScrollView>
      
      <TouchableOpacity style={styles.seeMoreButton}>
        <Text style={styles.buttonText}>See More</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#FAF2F2",
    
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "300",
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#800000',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  contactButton: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#800000",
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    width: '48%'
  },
  buyButton: {
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: "#800000",
    borderRadius: 10,
    width: '48%'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  sellerInfo: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  sellerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  sellerName: {
    fontSize: 16,
   
  },
  followButton: {
    backgroundColor: "#800000",
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical:5,
  },
  similarProductCard: {
    width: 150,
    marginRight: 10,
  },
  similarProductImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  similarProductTitle: {
    fontSize: 14,
    marginVertical: 5,
  },
  similarProductPrice: {
    fontSize: 14,
    color: '#000000',
  },
  seeMoreButton: {
    backgroundColor: "#800000",
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 30
  },
});

export default ProductDetails;
