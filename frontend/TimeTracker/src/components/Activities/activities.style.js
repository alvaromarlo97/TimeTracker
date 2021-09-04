import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(235,255,254,1)',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    marginTop: 100,
    width: 200,
    height: 200,
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
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 69,
    backgroundColor: 'rgba(30,191,178,1)',
    borderRadius: 25,
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5,

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
