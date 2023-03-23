import { useMemo } from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffcf2',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        color: "#22223b",
    },
    list: {
        maxHeight: "80%",
        marginBottom: 20,
        width: "80%"
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderBottomColor: "#252422",
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 32,
        marginBottom: 6,
        textAlign: "center"
    },
    count: {
        color: "#eb5e28",
        fontSize: 22,
        textAlign: "center"
    },
});

const Item = ({ word, count }) => {
    return <View style={styles.item}>
        <Text style={styles.title}>"{word}"</Text>
        <Text style={styles.count}>{count} time{count > 1 ? "s" : ""}</Text>
    </View>
}

export const WordCount = ({ navigation, textValue }) => {
    const handlePress = () => {
        navigation.navigate("Home")
    }

    const wordsArray = useMemo(() => {
        const words = textValue.trim().toLowerCase().replace(/[^a-zA-Z0-9 ]+/g, "").split(" ").reduce((obj, current) => {
            if (obj[current]) {
                obj[current]++
            } else {
                obj[current] = 1
            }

            return obj
        }, {})

        return Object.entries(words).map(([key, value]) => ({
            word: key,
            count: value,
        }))
    }, [textValue])

    return <View style={styles.container}>
        <FlatList style={styles.list} data={wordsArray} renderItem={({ item }) => <Item word={item.word} count={item.count} />} />
        <Button onPress={handlePress} title="Go Back"></Button>
    </View>
}