import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECFFFE',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    marginTop: 100,
    width: 200,
    height: 200,
  },
  scroll: {
    marginTop: 10,
  },
  email: {
    fontFamily: 'arial',
    fontSize: 25,
    color: '#121212',
    height: 69,
    width: 263,
    backgroundColor: 'rgba(196,255,252,1)',
    textAlign: 'center',
    borderRadius: 25,
    marginTop: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5,

  },
  email1: {
    fontFamily: 'arial',
    fontSize: 25,
    color: '#121212',
    height: 69,
    width: 263,
    backgroundColor: 'rgba(196,255,252,1)',
    textAlign: 'center',
    borderRadius: 25,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5,

  },
  addActivity: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FD9F32',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 50,
  },
  x: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 50,
  },
  button: {
    display: 'flex',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 350,
    height: 69,
    borderRadius: 25,
    backgroundColor: '#B9D8EA',

  },
  login: {
    fontFamily: 'arial',
    color: '#121212',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 30,
    marginTop: 8,
  },
});
