import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  innerEl: {
    margin: 5,
    paddingTop: 2,
    borderColor: '#fff',
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    borderRadius: 4,
    borderWidth: 1
  },
  input: {
    borderColor: '#D2D1D3',
    marginBottom: 10,
    marginLeft: 3,
    marginRight: 3,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 2,
    borderWidth: 1
  },
  btn: {
    backgroundColor: "#FE3217",
    marginTop: 10,
    padding: 5,
    justifyContent: 'center',
    borderRadius: 3
  },
  btnText: {
    color: '#fff',
    textAlign: 'center'
  },
  switchTitle: {
    color: '#424242',
    padding: 5
  },
  swtch: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 5
  }
});