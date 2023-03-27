import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, SafeAreaView, Alert, Pressable, Image, TextInput, ScrollView } from 'react-native'
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Products from '../components/Products';



const Home = () => {

  const [userLocation, setUserLocation] = useState('Getting your location ... ');
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);


  // Before you can access a user's location, you need to request permission. 
  const getLocationPermission = async () => {

    let { enabled } = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert('Location services not enabled!', 'Please kindly enable laction services', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);

    } else {
      setIsLocationEnabled(enabled);
    }
  };

  // Get the user's location once you have permission to access the user's location.
  const getCurrentLocation = async () => {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {

      Alert.alert('Location services Denied', 'Please kindly enable laction services', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }

    let { coords } = await Location.getCurrentPositionAsync({});
    // console.log(coords);

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({ latitude, longitude });

      // console.log(response);

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}, ${item.country}`;
        setUserLocation(address);
      }
    };

    // return coords;
  };

  // Proceed to get user's location when Home screen is loaded 
  useEffect(() => {
    // Requesting for user location permmition and getting the location 
    getLocationPermission();
    getCurrentLocation();

  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>!-Laundry</Text>
      <View style={styles.header}>

        <Entypo style={styles.locationIcon} name="location" size={24} color="#ff6961" />
        <View style={styles.locationDescription}>
          <Text style={styles.headerText}>{userLocation}</Text>
        </View>

        <Pressable style={styles.avaterContainer}>
          <Image style={styles.avater} source={require('../assets/images/avater.jpg')} />
        </Pressable>

      </View>
      <ScrollView>

        {/* form input  */}
        <View style={styles.formContainer}>
          <TextInput editable numberOfLines={3} maxLength={40} style={styles.textInput} />
          <FontAwesome name="search" size={24} color="#ff6961" style={styles.searchIcon} />
        </View>

        {/* carousel slider  */}
        <Carousel />

        {/* services section  */}
        <Services />

        {/* products section  */}
        <Products />
      </ScrollView>

      {console.log('Hello')}
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: '#f1f1f1',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    // backgroundColor: 'gray',
  },
  locationIcon: {
    // flex: 1,
    // maxWidth: '12%',
  },
  locationDescription: {
    // flex: 5,
    maxWidth: '80%',
    padding: 5,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 700,
    paddingLeft: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 400,
  },
  avaterContainer: {
    // flex: 1,
    // maxWidth: '15%',
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#ff6961',
    marginLeft: 'auto',
    padding: 1,
  },
  avater: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },

  // styling for form and seach icon 
  formContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  textInput: {
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginLeft: 'auto',
    marginRight: 10,
  },


})

