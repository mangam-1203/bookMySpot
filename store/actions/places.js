import image from '../../assets/aditya-chinchure-570860-unsplash.jpg';

export const inputAction = (placename) => {
    return {
        type : "INPUT_ACTION",
        placeName : placename
    }
}

export const addAction = (placeName)=> {

    return {
        type : "ADD_ACTION", 
        placeName : placeName,
        placeImage : image
    }        
}

export const deleteAction = () => {
    return {
        type : "DELETE_ACTION"
    }
}

export const selectAction = (key) => {
    return {
        type : "SELECT_ACTION",
        selectedPlace : key
    }
}

export const deselectAction = () => {
    return {
        type : "DESELECT_ACTION"
    }
}