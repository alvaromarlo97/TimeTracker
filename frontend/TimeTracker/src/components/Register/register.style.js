import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#262155',
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
    fontFamily: 'Avenir-Medium',
    fontSize: 25,
    color: 'white',
    height: 69,
    width: 263,
    backgroundColor: '#61DFE7',
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
    fontFamily: 'Avenir-Medium',
    fontSize: 25,
    color: 'white',
    height: 69,
    width: 263,
    backgroundColor: '#61DFE7',
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
    width: 175,
    height: 69,
    backgroundColor: '#FD9F32',
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
    fontFamily: 'Avenir-Medium',
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 30,
    marginTop: 8,
  },
  login1: {
    fontFamily: 'Avenir-Medium',
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 30,
    marginTop: 8,
  },

});
