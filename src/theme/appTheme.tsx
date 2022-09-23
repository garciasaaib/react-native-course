import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column-reverse',
  },
  texto: {
    color: 'white',
    fontSize: 20,
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  calculadoraContainer: {
    paddingHorizontal: 20,
  },
  resultSmall: {
    color: 'rgba(255,255,255,.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 18,
  },
});

