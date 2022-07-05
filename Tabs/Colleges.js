import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Colleges() {
  return (
    <View style={styles.container}>
      <Text style={styles.HeaderUni}> My top 3 Colleges</Text>

      <FlatList
        data={[{ key: 'UCLA' }, { key: 'Berkeley' }, { key: 'Stanford' }]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    color: '#FFFFFF',
    fontSize: 40,
    fontFamily: 'Courier New',
    textAlign: 'center',
  },
  HeaderUni: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 31,
    backgroundColor: '#D3D3D3',
    margin: 50,
    textAlign: 'center',
  },
})
