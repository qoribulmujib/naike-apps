import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import products from '../../data/products';

const ProductDetailsScreen = () => {
  const product = products[0];
  const {width} = useWindowDimensions();

  const addToCart = item => {
    console.warn('addtocart');
  };
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          {/* Image Carousel */}
          <FlatList
            data={product?.images}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            renderItem={({item}) => (
              <Image
                source={{
                  uri: item,
                }}
                style={{width, aspectRatio: 1}}
              />
            )}
          />
          <View style={{padding: 20}}>
            {/* Title */}
            <Text style={styles.title}>{product?.name}</Text>

            {/* Price */}
            <Text style={styles.price}>${product?.price}</Text>
            {/* Description */}
            <Text style={styles.description}>{product?.description}</Text>
          </View>
        </ScrollView>
        {/* Add to cart button */}
        <Pressable style={styles.button} onPress={() => addToCart()}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </Pressable>

        {/* Navigation icon */}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#000',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ProductDetailsScreen;
