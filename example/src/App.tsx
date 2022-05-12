import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Title } from 'react-native-miguel-rosa-rn-title';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>test</Text>
      <Title>Title</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
