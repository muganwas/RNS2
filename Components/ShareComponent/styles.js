import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: "#000",
    backgroundColor: '#F5FCFF',
  },
  innerEl: {
    margin: 10
  },
  input: {
    padding: 4,
    borderColor: "#cccccc",
    borderWidth: 2,
    borderRadius: 3
  },
  touchable: {
    marginTop: 5,
    backgroundColor: "#9ebc0a",
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
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