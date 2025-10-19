import { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, Platform, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Posts() {

  type Post = { userId: number, id: number; title: string; body: string };

  const [postList, setPostList] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [error, setError] = useState("");

  const URL = "https://jsonplaceholder.typicode.com/posts";

  const headers = { "Content-Type": "application/json" };

  const jsonBody = JSON.stringify({
    title: postTitle,
    body: postBody
  });

  const addPost = async () => {
    setIsPosting(true);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: headers,
        body: jsonBody
      })
      const newPost = await response.json();
      setPostList([newPost, ...postList]);
    } catch (error) {
      console.error("Error adding post", error);
      setError("Failed to add post")
    }
  }

  const fetchData = async (limit: number = 10) => {
    try {
      const response = await fetch(
        URL + `?_limit=${limit}`
      );
      const data = await response.json();
      setPostList(data);
      setIsLoading(false);
      setError("");
    } catch (error) {
      console.error("Error fetching data", error);
      setIsLoading(false);
      setError("Failed to fetch data")
    }
  }

  const handleRefresh = async () => {
    setRefresh(true);
    await fetchData(10);
    setRefresh(false);
  }

  useEffect(() => { fetchData() }, []);

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="default" />
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Text style={{ fontSize:25 }}>{error}</Text>
        </View>
      </SafeAreaView>
    )
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="default" />
        <View style={styles.loadingContainer}>
          <StatusBar barStyle="default" />
          <ActivityIndicator size="large" color="black" />
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.listContainer}>
        <View style={styles.inputBox}>
          <Text style={{ margin: 12, alignSelf: "center", fontSize: 30, fontWeight: "bold" }}>Add Post</Text>
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.input} placeholder="Title" value={postTitle} onChangeText={setPostTitle} />
          <Text style={styles.label}>Body</Text>
          <TextInput style={styles.inputBody} placeholder="Body" value={postBody} onChangeText={setPostBody} multiline />
          <Button title={isPosting ? "Adding..." : "Add Post"} onPress={addPost} disabled={isPosting} />
        </View>
        <FlatList<Post>
          keyExtractor={(item, index) => index.toString()}
          data={postList}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <View style={styles.listShadow}>
                <Text style={styles.text}>Id {item.id}</Text>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text}>{item.body}</Text>
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => (<View style={{ height: 16 }} />)}
          ListEmptyComponent={<Text>Posts Not Found</Text>}
          ListHeaderComponent={<Text style={{ fontSize: 22 }}>Post List</Text>}
          ListHeaderComponentStyle={styles.header}
          ListFooterComponent={<Text style={{ fontSize: 22 }}>End of List</Text>}
          ListFooterComponentStyle={styles.footer}
          refreshing={refresh}
          onRefresh={handleRefresh}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", paddingTop: StatusBar.currentHeight },
  listContainer: { flex: 1, paddingHorizontal: 16, },
  loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  header: { alignSelf: "center", borderWidth: 2, borderRadius: 6, padding: 8, marginBottom: 16 },
  footer: { alignSelf: "center", borderWidth: 2, borderRadius: 6, padding: 8, marginTop: 16 },
  list: {
    borderWidth: 2, borderRadius: 8, padding: 12,
  },
  listShadow: {
    ...Platform.select({
      ios: {
        shadowOffset: { height: 2, width: 0 },
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowRadius: 2
      },
      android: {
        elevation: 4
      }
    })
  },
  // image: { width: 200, height: 200, alignSelf: "center", padding: 15 },
  label: { marginLeft: 12, fontWeight: "bold", fontSize: 16 },
  input: { height: 30, margin: 12, padding: 5, borderWidth: 1, borderRadius: 8, width: 300 },
  inputBody: { height: 90, margin: 12, padding: 5, borderWidth: 1, borderRadius: 8, width: 300, textAlignVertical: "top" },
  inputBox: { borderWidth: 1, padding: 10, margin: 12, textAlignVertical: "top", borderRadius: 10 },
  text: { fontSize: 20 },
})