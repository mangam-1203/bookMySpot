import React from "react";
import { movies, fetchMovies} from "../../data/data";
import {View,Text,Button,ScrollView,Image} from 'react-native';
import {ListItem} from '../ListItem/ListItem';

export default class List extends React.Component {

    render(){         
               
        return (       
               <ScrollView >  
                <View style={styles.container}>
                          
                {movies.map((movie,index)=>{  
                    
                    return (
                        <ListItem 
                        index ={index} 
                        navigation={this.props.navigation} 
                        key={index} 
                        title={movie.title} 
                        poster={movie.poster} />
                    )
                })
                }                                  
                </View>
               </ScrollView>
         )
    }
}

const styles = {
    container : {
        padding : 5,
        flexDirection : "row",
        flexWrap : "wrap",
        alignItems : "center"
    }
}
