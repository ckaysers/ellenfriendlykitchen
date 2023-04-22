import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1, //means that the container will grow and shrink to fill the available space in its parent container. It's a shorthand for three properties: flexGrow, flexShrink, and flexBasis.
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      // borderWidth: 1,
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      width: '100%',
      // borderWidth: 1,
    },
    input: {
      width: '60%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
    },
    listContainer: {
      alignItems: 'center',
      width: '100%',
    },
    taskItem: {
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
  

export default styles;
