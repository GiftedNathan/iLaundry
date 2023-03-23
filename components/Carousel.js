import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";


const Carousel = () => {

  const slideImages = [
    "https://source.unsplash.com/1024x768/?towels",
    require('../assets/images/hero1.jpg'),
    require('../assets/images/hero2.jpg'),
    require('../assets/images/hero3.jpg'),
    require('../assets/images/hero4.jpg'),
    require('../assets/images/hero5.jpg'),

  ];


  return (
    <View style={styles.slideContainer}>
      <SliderBox
        images={slideImages}
        sliderBoxHeight={200}
        dotColor="#ff6961"
        inactiveDotColor="#90A4AE"
        dotStyle={styles.dotStyle}
        autoplay
        circleLoop
        ImageComponentStyle={{
          borderRadius: 15, width: '90%', marginTop: 5, margin: 'auto',
        }}
        imageLoadingColor="#2196F3"
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  slideContainer: {
    marginTop: 15,
  },
  dotStyle: {
    width: 20,
    height: 15,
    borderRadius: 15,
    marginHorizontal: 5,
    padding: 0,
    margin: 0
  },

})