import reactDom from "react-dom";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.Header}> Bryan Aguilar aka Benji </Text>
      <Text style={styles.Para}>
        {' '}
        Hello, my name is Bryan Aguilar I'm in a program called txt, and I'm a
        Lil. Why I joined TXT first started with something I could do to kill
        time but even though it is stressful I love it because it keeps me
        entertained and has changed my way of looking at things I do and it's
        one hell of an enriching learning opportunity.{' '}
      </Text>

      {/*Image uri and Style*/}
      <Image
        source={{
          uri: 'https://images.saymedia-content.com/.image/t_share/MTc0MjE4NTE5MzY0MjQ5NDY4/extreme-sports-wingsuit-flying.jpg',
        }}
        style={{ width: 300, height: 200, margin: 30 }}
      />
      <Text style={styles.ParaTwo}>
        I choose this image because since I was little even tho I was afraid of
        heights I liked to be in extremely tall places and Ive always dreamed of
        using a flying suit doing prachuting etc.
      </Text>
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

  Header: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: '#000000',
    margin: 20,
    fontFamily: 'Courier New',
  },

  Para: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Courier New',
    textAlign: 'center',
  },
  ParaTwo: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Courier New',
    fontWeight: 'bold',
  },
})