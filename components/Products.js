import { View, ScrollView, Text, StyleSheet, Pressable, Image, Button, Alert } from 'react-native'
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';


const Products = () => {

  // products data 
  const products = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "shirt",
      quantity: 0,
      price: 110,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-shirt",
      quantity: 0,
      price: 130,
    },
    {
      id: "19",
      image: "https://cdn-icons-png.flaticon.com/512/3044/3044058.png",
      name: "Couple",
      quantity: 0,
      price: 270,
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "dresses",
      quantity: 0,
      price: 70,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "jeans",
      quantity: 0,
      price: 210,
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: 160,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "shorts",
      quantity: 1,
      price: 110,
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: 90,
    },
    {
      id: "17",
      image: "https://cdn-icons-png.flaticon.com/512/2331/2331716.png",
      name: "Shirt & Short",
      quantity: 0,
      price: 200,
    },
  ];

  return (
    <View style={styles.productsContainer}>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, }}>
        <FontAwesome name="cart-arrow-down" size={24} color="#ff6961" />
        <Text style={styles.productsTitle}>Select to add to cart </Text>
      </View>

      <ScrollView >
        {products.map((product, index) => (

          <Pressable key={index} style={styles.product}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <View>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>₦{product.price}</Text>
            </View>
            <Button title="+ to cart" onPress={() => Alert.alert('Simple Button pressed')} />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({
  productsContainer: {
    marginTop: 15,
  },
  products: {

  },
  productsTitle: {
    fontSize: 20,
    fontWeight: 700,
    // paddingLeft: 10,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginRight: 7,
    marginVertical: 7,
    borderRadius: 7,
    backgroundColor: 'white',

  },
  productImage: {
    width: 70,
    height: 70,
  },
  productName: {
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '500',
  },

})