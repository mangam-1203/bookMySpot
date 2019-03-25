import React from "react";
import {View,Text,Image,StyleSheet,TouchableHighlight} from 'react-native';


export const ListItem = (props) => {
    return (
        <View style={styles.ItemView}>
            <TouchableHighlight
            onPress={()=>console.log(props.navigation.navigate('Movie',{
              index : props.index
            }))}>
            <Image source={{uri:`${props.poster}`}} style={styles.poster}/>
            </TouchableHighlight>
            <View style={styles.textView}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ItemView : {
        margin : 5,
        height : 220,
        width : 160,
        padding : 5,
        marginBottom : 7
    },
    poster : {
        height : "90%",
        width : "100%",
        borderRadius : 4
    },
    textView : {
        width : "100%",
        height : "100%",
        alignItems : "center"
    },
    text : {
        color : "#444444"
    }
})
