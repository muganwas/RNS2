import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  button: {
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: '#FE3217',
    padding: 5,
    margin: 5
  },
  text: {
    fontWeight: '800',
    color: "#ffffff",
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