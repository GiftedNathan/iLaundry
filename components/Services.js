import { View, ScrollView, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';



const Services = () => {

  // services data code
  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
      name: "Washing",
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
      name: "Laundry",
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
      name: "Wash & Iron",
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
      name: "Cleaning",
    },
  ];

  return (
    <View style={styles.servicesContainer}>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={styles.servicesTitle}>Our Services </Text>
        <FontAwesome name="long-arrow-right" size={24} color="#ff6961" />
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {services.map((service, index) => (

          <Pressable key={index} style={styles.service}>
            <Image source={{ uri: service.image }} style={styles.serviceImage} />
            <Text style={styles.serviceName}>{service.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

export default Services

const styles = StyleSheet.create({
  servicesContainer: {
    marginTop: 15,
  },
  services: {

  },
  servicesTitle: {
    fontSize: 24,
    fontWeight: 700,
    // paddingLeft: 10,
  },
  service: {
    alignItems: 'center',
    padding: 20,
    marginRight: 7,
    marginVertical: 7,
    borderRadius: 7,
    backgroundColor: 'white',

  },
  serviceImage: {
    width: 70,
    height: 70,
  },
  serviceName: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '500',
  },

})