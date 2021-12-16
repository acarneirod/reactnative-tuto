import { StyleSheet } from 'react-native';
import theme from '../../app/theme';

const styles = StyleSheet.create({
  titulo: {
    alignContent: 'center'
  },
  container: {
    display: 'flex',
    backgroundColor: theme.colors.secondary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
