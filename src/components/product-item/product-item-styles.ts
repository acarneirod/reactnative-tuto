import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../app/theme';

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    width: Dimensions.get('screen').width - 50,
    padding: 5,
    margin: 6,
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.black,
  },
  superior: {
    height: 250,
    marginBottom: 15
  },
  marca: {
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
    backgroundColor: theme.colors.black,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20
  },
  inferior: {
    paddingHorizontal: 10
  },
  textoMarca: {
    color: theme.colors.white,
    fontSize: 12,
    fontWeight: '700'
  },
  nombre: {
    fontWeight: '700'
  },
  precio: {
    fontSize: 20,
    fontWeight: '700'
  },
  imagen: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 250,
    aspectRatio: 1
  },
  boton: {
    marginTop: 20
  }
});

export default styles;
