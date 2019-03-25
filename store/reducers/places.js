import action from '../actions/places';

const initialState = {
    places : [],
    placename : "",
    selectedPlace : null
}

const placesReducer = (state = initialState,action) => {
    switch(action.type){
        case 'INPUT_ACTION':{
            return {
                ...state,
                placeName : action.placeName
            }
        }
        case "ADD_ACTION":{
            return {
                ...state,
                places : state.places.concat(
                    { value : state.placeName,
                      index : Math.random(),
                      image : action.placeImage
                    }
                )
            }
        }

        case "DELETE_ACTION":{
            return {
                ...state,
                places : state.places.filter(place=>{
                    return place.index !== state.selectedPlace.index
                }),
                selectedPlace : null
            }
        }

        case "SELECT_ACTION":{
            return {
                ...state,
                selectedPlace : action.selectedPlace
            }
        }

        case "DESELECT_ACTION":{
            return {
                ...state,
                selectedPlace : null
            }
        }

        default: {
            return state
        }
    }
}

export default placesReducer;