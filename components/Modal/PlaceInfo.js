import React from 'react';
import {View,Modal,Text,Button,Image,TouchableHighlight} from 'react-native';
import styles from '../../styles/PlaceInfoModal';
import Icon from 'react-native-vector-icons/Ionicons';

export default PlaceInfo = (props) => {
    return (
        <Modal visible={props.selectedPlace != null} animationType="slide" onRequestClose={props.onModalClose}>
                <View style={styles.modalView}>
                  <Image style={styles.image} source={ props.selectedPlace != null ? props.selectedPlace.image : ""}/>
                  <Text style={styles.text}>{props.selectedPlace != null ? props.selectedPlace.value : ""}</Text>
                  <TouchableHighlight style={styles.deleteBtn} onPress={props.onDelete}>
                    <Icon name="ios-trash" size={30}></Icon>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.closeBtn} onPress={props.onModalClose}><Text>CLOSE</Text></TouchableHighlight>
                </View>
        </Modal>
    )
}

