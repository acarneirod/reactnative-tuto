import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import styles from './product-item-styles';

const ProductItem = ({ product }) => {
  return (
    <View style={styles.item}>
      <View style={styles.superior}>
        <Image
          style={styles.imagen}
          source={{
            uri: product.image
          }}
        />
        <View style={styles.marca}>
          <Text style={styles.textoMarca}>{product.brand}</Text>
        </View>
      </View>
      <View style={styles.inferior}>
        <Text style={styles.nombre}>{product.name}</Text>
        <Text style={styles.precio}>{`${product.unitPrice}€`}</Text>
      </View>
      <View style={styles.boton}>
        <Button title="Añadir al carrito" />
      </View>
    </View>
  );
};

export default ProductItem;
