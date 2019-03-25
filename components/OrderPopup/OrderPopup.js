import React from "react";
import {View,TouchableHighlight,Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {movies} from '../../data/data';

export default class OrderPopup extends React.Component {
    state={
        dayChosen: null,
        timeChosen : null
    }
    handleDayHandler = (index) => {
        this.setState(prevState=>{
            return {
                dayChosen : index
            }            
        })    
    }

    handleTimeHandler = (index) => {
        this.setState(prevState=>{
            return {
                timeChosen : index
            }            
        })    
    }

    render(){     
    return (      
        <View style={styles.popupView}>
            <ScrollView horizontal={true} style={styles.daysView}>
            {movies[this.props.index].days.map((time,index)=>{
              return (
              <TouchableHighlight onPress={() => this.handleDayHandler(index)}
               style={this.state.dayChosen === index ? styles.dayActive : styles.days}
               key={index}>
              <Text style={this.state.dayChosen === index ? styles.textActive : styles.text}>{time}</Text>
              </TouchableHighlight>)
            })}
            </ScrollView>
            <ScrollView horizontal={true} style={styles.timesView}>
                {movies[this.props.index].times.map((time,index)=>{
                  return (
                  <TouchableHighlight onPress={() => this.handleTimeHandler(index)} 
                  style={this.state.timeChosen === index ? styles.timeActive : styles.times} 
                  key={index}>
                  
                    <Text style={this.state.timeChosen === index ? styles.textActive : styles.text}>{time}</Text>
                                  
                  </TouchableHighlight>)
                })}
            </ScrollView>  
            <TouchableHighlight onPress={()=> {
                this.props.navigation.navigate('Confirmation')
            }} style={styles.bookBtn} >
                <Text>Book my Spot!</Text>
            </TouchableHighlight>   
            <TouchableHighlight style={styles.bookBtn} onPress={this.props.handleBackBtn} >
                <Text>Go Back</Text>
            </TouchableHighlight>       
            
        </View>
    )
    }
}

const styles = StyleSheet.create({
    popupView : {
        padding : 15,
        justifyContent : "center"
    },
    times : {      
        marginRight : 8,
        backgroundColor : "#ffffff",
        padding : 8,  
        borderRadius : 9,
        height : 60,
        width : 110 ,
        alignItems : "center" ,
        justifyContent : "center"  
    }, 
    timeActive : {
        marginRight : 8,
        backgroundColor : "purple",
        padding : 8,  
        borderRadius : 9,
        height : 60,
        width : 110 ,  
        alignItems : "center" ,
        justifyContent : "center" 
    }, 
    daysView : {
        marginTop : 20 ,
        marginBottom : 10
    },
    days : {
        marginRight : 8,
        backgroundColor : "#ffffff",
        padding : 8,  
        borderRadius : 9,
        height : 60,   
        width : 110 , 
        alignItems : "center" ,
        justifyContent : "center"   
    },
    dayActive : {
        marginRight : 8,
        backgroundColor : "purple",
        padding : 8,  
        borderRadius : 9,
        height : 60,   
        width : 110 , 
        alignItems : "center" ,
        justifyContent : "center"  
    },
    text : {
        color : "purple",
        fontSize : 15
    },   
    textActive : {
        color : "#ffffff",
        fontSize : 15
    },
    bookBtn : {
        width : "100%",
        backgroundColor : "green",
        height : 60,
        padding : 8,
        alignItems : "center",
        justifyContent : "center",
        marginTop : 15,
        
    }
              
})