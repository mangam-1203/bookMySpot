import React from 'react';
import {View,TextInput,Button} from 'react-native';
import styles from '../../styles/PlacesApp';

export default InputPlace = (props) => (
    <View style={styles.input}>
        <TextInput
        style={styles.inputText}
        placeholder="San Francisco"
        value={props.placeName}
        onChangeText={props.handleTextChange}
        />
        <Button 
        style={styles.inputBtn}
        title="Add" 
        onPress={props.handleAddBtn}
        />        
    </View>
)

