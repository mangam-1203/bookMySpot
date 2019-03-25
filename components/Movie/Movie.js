import React from 'react';
import {View,Text, Image, TouchableHighlight, Button, Animated, Dimensions} from 'react-native';
import {movies,fetchMovies} from '../../data/data';
import OrderPopup from '../OrderPopup/OrderPopup';

const {height,width } = Dimensions.get("window");
     
export default class Movie extends React.Component {
  state = {
    isOpen : false,
    height : new Animated.Value(0),
    ctrlOpacity : new Animated.Value(0)
  } 

  handleBookBtn = () => {
    Animated.timing(                  // Animate over time
      this.state.ctrlOpacity,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 500,              // Make it take a while
      }
    ).start(); 

    Animated.timing(                  // Animate over time
      this.state.height,            // The animated value to drive
      {
        toValue: (height/2),                   // Animate to opacity: 1 (opaque)
        duration: 500,
        //easing: Easing.back(),                                    // Make it take a while
      }
    ).start(); 
  }   

  handleBackBtn = () => {
    Animated.timing(                  // Animate over time
      this.state.ctrlOpacity,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 500,              // Make it take a while
      }
    ).start(); 

    Animated.timing(                  
      this.state.height,            
      {
        toValue: 0,                  
        duration: 500,
      }
    ).start(); 
  }   

    render(){
    const i = this.props.navigation.getParam('index',0);

      return (
          <View style={styles.movieView}>
              <TouchableHighlight onPress={this.handleBackBtn} style={{height : "50%",width : "80%"}}>
              <Image source={{uri : `${movies[i].poster}`}} style={{height : "100%",width : "100%"}} />
              </TouchableHighlight>
              <Text>{movies[i].title}</Text>
              <Text>{movies[i].year}</Text>
              <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</Text>
              <View>
                <TouchableHighlight onPress={this.handleBookBtn}>
                  <Text>Book!</Text>
                </TouchableHighlight>
              </View>
              <Animated.View style={{...styles.modalView,
                opacity:this.state.ctrlOpacity,
                height:this.state.height}}
                >
                <OrderPopup navigation={this.props.navigation} handleBackBtn={this.handleBackBtn} index={i} />
              </Animated.View>
          </View>
      )
  }
}

const styles = {
  movieView : {
    flex : 1,
    padding : 15,
    justifyContent: 'space-between',
    alignItems : "center"
  },
  modalView : {
    height : (height/3),
    width : width,
    backgroundColor:"red",
    position: "absolute",
    bottom: 0,
    left : 0
  }
}
