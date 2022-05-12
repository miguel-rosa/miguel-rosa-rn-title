import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Title: React.FC = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
