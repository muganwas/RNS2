import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    color: "#000",
    backgroundColor: '#F5FCFF',
  },
  innerEl: {
    flexDirection: "row",
    height: 100,
    margin: 10
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  image: {
    flex: 1,
    padding: 4,
    margin: 2
  },
  activityIndicator: {
    backgroundColor: "#cccccc"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});