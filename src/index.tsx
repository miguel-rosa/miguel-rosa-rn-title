import React from 'react';
import { StyleSheet, View } from 'react-native';

type TitleProps = {
  test?: string;
}

const Title:React.FC<TitleProps> = ({children}) => {
  return <View style={styles.view}>{children}</View>
}

const styles = StyleSheet.create({
  view: {
    padding: 20,
  }
})

export default Title;