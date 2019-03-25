import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',    
      padding : 15,
      paddingTop : 40,
    },
    input : {
      width : "100%",
      display : "flex",
      flexDirection : "row",
      justifyContent : "space-between",
      alignItems: 'center'
    },
    inputText: {
      flex : 0.9
    },
    listView : {
      width : "100%"
    }
  });