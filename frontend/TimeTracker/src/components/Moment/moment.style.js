import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#262155',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 150,
    width: 300,
  },
  startText: {
    color: '#262155',
    textAlign: 'center',
    fontSize: 80,
  },
  start: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FD9F32',
  },
  time: {
    fontSize: 50,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
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
    width: 300,
    height: 69,
    borderRadius: 25,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5,
  },
  buttonTime: {
    fontSize: 25,
    color: '#FCFFFF',
    fontFamily: 'Avenir-Medium',
  },
});
