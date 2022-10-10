import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Card from "./components/Card";

/*
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.ust}>
        <Text>ust flex</Text>
      </View>
      <View>
        <Text>alt flex</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ust: {
    backgroundColor: "black",
    flex: 1
  },
  alt: {
    backgroundColor: "red",
    flex: 1
  },
});
*/
/*

flex


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.kutu1}></View>
      <View style={styles.kutu2}></View>
      <View style={styles.kutu3}></View>
      <View style={styles.kutu4}></View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1, 
    backgroundColor:'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kutu1: {
    flex: 1,
    backgroundColor:'red',
  },
  kutu2: {
    flex: 1,
    backgroundColor:'yellow',
  },
  kutu3: {
    flex: 1,
    backgroundColor:'green',
  },
  kutu4: {
    flex: 1,
    backgroundColor:'grey',
  }
})
*/

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.disView}>
        <View style={styles.upView}>
          <View>
            <Text style={styles.ustText}>John Doe</Text>
            <Text style={styles.altText}>Lorem ipsum dolor.</Text>
          </View>
          <TouchableOpacity style={styles.buton}>
            <Text style={styles.butonText}>I LIKE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.upView}>
          <View>
            <Text style={styles.ustText}>John Doe</Text>
            <Text style={styles.altText}>
              Ut scelerisque, enim a dapibus feugiat...
            </Text>
          </View>
          <TouchableOpacity style={styles.buton}>
            <Text style={styles.butonText}>I LIKE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.upView}>
          <View>
            <Text style={styles.ustText}>Cat Doe</Text>
            <Text style={styles.altText}>Lorem ipsum dolor.</Text>
          </View>
          <TouchableOpacity style={styles.buton}>
            <Text style={styles.butonText}>I MEOW</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      <Card title='Sergio' text="Joe"></Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: StatusBar.currentHeight,
  },
  upView: {
    justifyContent: "space-between",
    flex: 1,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 35,
  },
  buton: {
    backgroundColor: '#15A0FB',
    alignItems:'center',
    padding: 10,
    borderRadius: 10,

  },
  ustText: {
    margin: 10,
    marginBottom: 1,
    fontWeight: "bold",
    fontSize: 22,
  },
  disView: {
    flex: 1,
    backgroundColor: "grey",
  },
  altText: {
    marginTop: 3,
    margin: 10,
  },
  butonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
