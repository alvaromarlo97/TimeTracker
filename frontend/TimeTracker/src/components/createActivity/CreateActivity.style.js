import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECFFFE',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingLeft: 50,

  },
  selectedColor: {
    marginRight: 50,
    height: 25,
    width: 25,
    borderRadius: 50,
  },
  activity: {
    flex: 1,

    fontSize: 25,
    height: 200,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  red: {
    backgroundColor: 'red',
    height: 25,
    width: 25,
    borderRadius: 50,
  },
  green: {
    backgroundColor: 'green',
    height: 25,
    width: 25,
    borderRadius: 50,
  },
  black: {
    backgroundColor: 'black',
    height: 25,
    width: 25,
    borderRadius: 50,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 175,
    height: 69,
    backgroundColor: 'rgba(30,191,178,1)',
    borderRadius: 25,
    shadowColor: '#000',
  },
});
