import React from 'react';
import { StyleSheet, Text,Modal, View, TextInput, Button } from 'react-native';
import styles from './styles/PlacesApp';
import List from './components/List/ListView';
import InputPlace from './components/InputPlace/inputPlace';
import PlaceInfo from './components/Modal/PlaceInfo';
import {connect} from 'react-redux';
import {addAction,deleteAction,selectAction,deselectAction, inputAction} from './store/actions/places';

class PlacesApp extends React.Component {
      handleTextChange = (name) => {
        this.props.inputChange(name);
      }
    
      handleAddBtn = () => {
        this.props.addPlace();
      }

      handleDeleteBtn = (key) => {
        this.props.selectPlace(key);
      }

      onDelete = () => {
       this.props.deletePlace();
      }

      onModalClose = () => {
        this.props.deselectPlace();
      }
    
      render() {
    
        return (
          <View style={styles.container}>
            <PlaceInfo 
            selectedPlace={this.props.selectedPlace}
            onDelete={this.onDelete}
            onModalClose={this.onModalClose}
            />
            <InputPlace 
            handleAddBtn={this.handleAddBtn} 
            handleTextChange={this.handleTextChange}
            placeName={this.props.placeName}
            />
            <List 
            places={this.props.places} 
            handleDeleteBtn={this.handleDeleteBtn}
            />         
          </View>
        );
      }
}

const mapStateToProps = state => {
  return {
    places : state.places.places,
    selectedPlace : state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inputChange : (name) => dispatch(inputAction(name)),
    addPlace : () => dispatch(addAction()),
    deletePlace : () => dispatch(deleteAction()),
    selectPlace : (place) => dispatch(selectAction(place)),
    deselectPlace : () => dispatch(deselectAction())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlacesApp)



