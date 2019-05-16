import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#42d9f4',
  },
  innerEl: {
    borderColor: '#e8f7f9',
    borderRadius: 4,
    backgroundColor: '#FEAD17',
    padding: 5,
    borderWidth: 1,
    margin: 5
  },
  text: {
    color: "#ffffff",
  },
  toolBar: {
    height: 50,
    backgroundColor: "rgba(186,1,27,1)",
    padding: 3,
    color: "#fff"
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});