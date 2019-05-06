import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: "#000",
    backgroundColor: '#F5FCFF',
  },
  rowCont: {
    flexDirection: "row"
  },
  rowElNum: {
    flex: 1
  },
  rowEl: {
    flex: 4
  },
  innerEl: {
    margin: 5,
    padding: 3
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