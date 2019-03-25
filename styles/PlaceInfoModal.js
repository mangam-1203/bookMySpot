import {StyleSheet} from 'react-native';
import { bold } from 'ansi-colors';

export default styles = StyleSheet.create({
    image :  {
        height : 200,
        width : "100%",
        marginBottom : 15
    },
    modalView : {
        padding : 15,
        alignItems : "center"
    },
    text : {
        fontWeight: "bold",
        fontSize : 40,
        marginBottom : 15
    },
    deleteBtn : {
        backgroundColor : "red",
        marginBottom : 15,
        width : "80%",
        padding : 15,
        justifyContent : "center",
        alignItems : "center"

    },
    closeBtn : {
        backgroundColor : "green",
        marginBottom : 15,
        width : "80%",
        padding : 15,
        justifyContent : "center",
        alignItems : "center"
    }
})