import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262155',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 0,
  },
  image: {
    marginTop: 100,
    width: 200,
    height: 200,
  },
  scroll: {
    marginTop: 5,
    width: '100%',
    marginBottom: -60,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 10,

  },
  addActivity: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FD9F32',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 20,

  },
  x: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 50,
  },
  xText: {
    fontSize: 15,
    color: '#FCFFFF',
    fontFamily: 'Avenir-Medium',
  },
  addText: {
    fontSize: 50,
    color: '#FCFFFF',
    fontFamily: 'Avenir-Medium',
  },
  co: {
    width: 50,
    height: 50,
    backgroundColor: '#262155',
    borderRadius: 50,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    height: 150,
    marginBottom: -60,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 10,
    backgroundColor: '#5382F8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  text: {
    fontSize: 40,
    color: '#FCFFFF',
    fontFamily: 'Avenir-Medium',
    width: 200,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 25,
  },

});
