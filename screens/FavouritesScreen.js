import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavouritesScreen =(props) => {
  return (
    <View style={styles.Screen}>
      <Text>The Favourites Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default FavouritesScreen;
